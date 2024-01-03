import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAccountContext } from "./AccountContext";
const ProfileContext = createContext();



export function ProfileContextProvider({ children }) {

    const [userProfile, setUserProfile] = useState("");

    const { authUser } = useAccountContext();
    

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/profile/${authUser.mobile}`);
                console.log(data)
                if (data.status === 404 || data.status == 500) {
                    setUserProfile(0)
                } else {
                    setUserProfile(data.profile)
                }
            } catch (err) {
                console.log(err)
            }
        }

        getUser()
    }, [authUser])

    console.log(userProfile)





    return <ProfileContext.Provider value={{ userProfile }}>{children}</ProfileContext.Provider>

}


export function useProfileContext() {
    return useContext(ProfileContext);
}