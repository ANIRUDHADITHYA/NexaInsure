const NexaInsure = artifacts.require("Nexainsure"); 

module.exports = function(deployer) {
  deployer.deploy(NexaInsure);
};