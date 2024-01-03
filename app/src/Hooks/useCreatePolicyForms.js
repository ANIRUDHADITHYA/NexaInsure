import { useEffect, useState } from "react";
import axios from "axios";
import { ValidateProfile } from "../Utils/ValidateProfile";
import { useCookies } from 'react-cookie';



const useCreatePolicyForms = () => {
    const [cookies] = useCookies([]);

    const [profileValues, setProfileValues] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        aadhar_card_no: "",
        dl_no: "",
        blood_group: "",
        address_line_1: "",
        address_line_2: "",
        state: "",
        city: "",
        pincode: "",

    });
    const [isProfileSubmit, setIsProfileSubmit] = useState(false);
    const [quotePopup, setQuotePopup] = useState(false);
    const [profileErrors, setProfileErrors] = useState("");
    const [profileLoader, setProfileLoader] = useState("");

    const [vehicleInfo, setVehicleInfo] = useState({
        owner_user_id: "",
        registration_number: "",
        vehicle_name: "",
        model: "",
        year: "",
        vehicle_color: "",
        chassis_number: "",
        rc_number: "",
        dealer_name: "",
        ex_showroom_price: "",
        state: "",
        city: "",
        pincode: "",

    });



    function generateUserId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let userId = '';

        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters.charAt(randomIndex);
        }

        return userId;
    }

    let user_id = generateUserId();


    const handleProfileChange = (event) => {
        setIsProfileSubmit(false)
        setProfileErrors("")
        const { name, value } = event.target;
        setProfileValues((preValues) => {
            return {
                ...preValues,
                [name]: value,
            }
        })

        console.log(profileErrors)

    }

    const handleVehicleChange = (event) => {
        setIsProfileSubmit(false)
        setProfileErrors("")
        const { name, value } = event.target;
        setVehicleInfo((preValues) => {
            return {
                ...preValues,
                [name]: value,
            }
        })

        console.log(profileErrors)

    }


    const handleProfileSubmit = async (event) => {
        event.preventDefault();
        setProfileErrors(ValidateProfile(profileValues, vehicleInfo));
        setIsProfileSubmit(true);
    }

    useEffect(() => {

        const handleProfileSubmit = async () => {

            try {
                const headers = {
                    'Authorization': cookies.jwt,
                    'Content-Type': 'application/json',
                };
                const { data } = await axios.post("http://localhost:3001/policy/add_profile", {
                    ...profileValues,
                }, { headers });

                if (data) {
                    if (data.errors) {
                        setProfileErrors(data.errors)
                    }
                    else {
                        setQuotePopup(true)
                    }
                }
            } catch (error) {
                console.log(error.message)
            }



        }
        const hanldeVehicleSubmit = async () => {
            
            vehicleInfo.owner_user_id = user_id;
            try {
                const headers = {
                    'Authorization': cookies.jwt,
                    'Content-Type': 'application/json',
                };
                await axios.post("http://localhost:3001/policy/add_vehicle_info", {
                    ...vehicleInfo,
                }, { headers }
                ).then((res) => {
                    if (res.data.errors.rc_number || res.data.errors.chassis_number || res.data.errors.registration_number) {
                        setProfileErrors(res.data.errors)
                        setProfileLoader(false)
                    }
                    else if (!res.data.errors.rc_number && !res.data.errors.chassis_number && !res.data.errors.registration_number) {
                        setProfileLoader(true)
                        setQuotePopup(true)
                    }
                    
                }).catch((err) => {
                    setProfileErrors(err.data.errors)
                    console.log(err.data.errors)
                })

            } catch (error) {
                console.log(error)
            }



        }



        if (Object.keys(profileErrors).length === 0 && isProfileSubmit) {
            setProfileLoader(true)
            hanldeVehicleSubmit();

        }

    }, [profileErrors, isProfileSubmit, profileValues])// eslint-disable-line react-hooks/exhaustive-deps





    return { handleProfileChange, handleProfileSubmit, user_id, profileValues, profileErrors, profileLoader, vehicleInfo, handleVehicleChange, quotePopup }
}

export default useCreatePolicyForms;