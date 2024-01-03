// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint) {
        uint c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }
}

contract Nexainsure {

    using SafeMath for uint;

    address public owner;
    uint public contractBalance;

    struct Policy {
        uint policyNumber;
        address holderAddress;
        uint premiumAmount;
        uint premiumStartDate;
        uint premiumExpiryDate;
        uint premiumPaidAmount;
        uint maxClaimAmount;
        bool active;
    }

    mapping(address => bool) public admins;
    mapping(address => uint) public userToActivePolicy; 
    Policy[] public policies;

    event NewPolicyCreated(address indexed policyHolder, uint policyNumber, uint premiumStartDate, uint premiumExpiryDate, uint premiumPaidAmount, uint maxClaimAmount);
    event ClaimApproved(uint policyNumber, uint estimateAmount, address policyHolder, uint payoutAmount);

    constructor() payable {
        owner = msg.sender;
        contractBalance = msg.value;
        admins[msg.sender] = true;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admins can call this function");
        _;
    }

    function createPolicy() public payable returns (uint, uint, uint, uint) {
        require(msg.value > 0, "Premium amount must be greater than zero");
        require(userToActivePolicy[msg.sender] == 0, "User already has an active policy");

        uint premiumAmount = msg.value;
        uint premiumStartDate = block.timestamp;
        uint premiumExpiryDate = (block.timestamp + 31536000);
        uint maxClaimAmount = 10 * premiumAmount;

        Policy memory newPolicy = Policy({
            policyNumber: policies.length,
            holderAddress: msg.sender,
            premiumAmount: premiumAmount,
            premiumStartDate: premiumStartDate,
            premiumExpiryDate: premiumExpiryDate,
            premiumPaidAmount: premiumAmount,
            maxClaimAmount: maxClaimAmount,
            active: true
        });

        policies.push(newPolicy);
        userToActivePolicy[msg.sender] = policies.length;
        emit NewPolicyCreated(msg.sender, newPolicy.policyNumber, premiumStartDate, premiumExpiryDate, premiumAmount, maxClaimAmount);

        contractBalance = contractBalance.add(msg.value);

        return (premiumStartDate, premiumExpiryDate, premiumAmount, maxClaimAmount);
    }

    function approveClaim(uint policyNumber, uint estimateAmount) public onlyAdmin {
        require(policyNumber < policies.length, "Policy does not exist");
        Policy storage policy = policies[policyNumber];
        require(policy.active, "Policy is not active");
        require(block.timestamp >= policy.premiumStartDate && block.timestamp <= policy.premiumExpiryDate, "Claim can only be done between premium start and expiry date");
        require(estimateAmount <= policy.maxClaimAmount, "Estimate amount exceeds max claim amount");

        uint payoutAmount = (90 * estimateAmount) / 100;
        require(contractBalance >= payoutAmount, "Contract does not have enough balance to pay the claim");

        policy.maxClaimAmount -= estimateAmount;
        contractBalance -= payoutAmount;

        payable(policy.holderAddress).transfer(payoutAmount);

        emit ClaimApproved(policyNumber, estimateAmount, policy.holderAddress, payoutAmount);
    }

    function addAdmin(address addressOfNewAdmin) public onlyOwner {
        admins[addressOfNewAdmin] = true;
    }

    function removeAdmin(address addressOfExistingAdmin) public onlyOwner {
        admins[addressOfExistingAdmin] = false;
    }
}
