import { useEffect, useState } from "react";
import axios from "axios";
import { ValidateUserProfile } from "../Utils/ValidateUserProfile";
import { useCookies } from 'react-cookie';
import { useAccountContext } from "../ContextAPI/AccountContext";



const useProfileForms = () => {
    const [cookies] = useCookies([]);
    const { authUser, logout } = useAccountContext();
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
    const [profileErrors, setProfileErrors] = useState("");
    const [profileLoader, setProfileLoader] = useState("");

    
    function generateUserId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let userId = '';

        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            userId += characters.charAt(randomIndex);
        }

        return userId;
    }

    const user_id = generateUserId();


    const handleProfileChange = (event) => {
        console.log(profileValues)
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

   

    const handleProfileSubmit = async (event) => {
        event.preventDefault();
        setProfileErrors(ValidateUserProfile(profileValues));
        setIsProfileSubmit(true);
    }

    useEffect(() => {

        const handleProfileSubmit = async () => {
            profileValues.user_id = user_id;
            profileValues.first_name = authUser.first_name;
            profileValues.last_name = authUser.last_name;
            profileValues.mobile = authUser.mobile;
            profileValues.email = authUser.email;
            try {
                const headers = {
                    'Authorization': cookies.jwt,
                    'Content-Type': 'application/json',
                };
                await axios.post("http://localhost:3001/policy/add_profile", {
                    ...profileValues,
                }, { headers }
                ).then((res) => {
                    if (res.data.errors) {
                        console.log(res.data.errors)
                        setProfileErrors(res.data.errors)
                        setProfileLoader(false)
                    }
                }).catch((err) => {
                    setProfileErrors(err.data.errors)
                    console.log(err.data.errors)
                })

            } catch (error) {
                console.log(error.message)
            }



        }
        

        if (Object.keys(profileErrors).length === 0 && isProfileSubmit) {
            setProfileLoader(true)
            handleProfileSubmit();

        }

    }, [profileErrors, isProfileSubmit, profileValues])// eslint-disable-line react-hooks/exhaustive-deps





    return { handleProfileChange, handleProfileSubmit, user_id, profileValues, profileErrors, profileLoader }
}

export default useProfileForms;