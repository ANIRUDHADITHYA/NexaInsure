import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const AccountContext = createContext();



export function AccountContextProvider({ children }) {


    const [cookies, setCookie, removeCookie] = useCookies([]);
    const [authUser, setAuthUser] = useState();

    const navigate = useNavigate();


    const logout = () => {
        removeCookie("jwt");
        navigate("/")
    };


    useEffect(() => {
        const verifyUser = async () => {
            const { data } = await axios.post("http://localhost:3001/", {}, { withCredentials: true });
            if (!data.status) {
                removeCookie("jwt");
                navigate("/")
            } else {
                setAuthUser(data.user)
            }
        }

        verifyUser()
    }, [cookies, navigate, removeCookie])





    return <AccountContext.Provider value={{authUser, logout}}>{children}</AccountContext.Provider>

}


export function useAccountContext() {
    return useContext(AccountContext);
}