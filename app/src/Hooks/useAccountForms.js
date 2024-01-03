import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ValidateLogin } from "../Utils/ValidateAccount";



const useAccountForms = (Validate) => {

    const navigate = useNavigate();

    const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
    const [registerErrors, setRegisterErrors] = useState("");
    const [registerLoader, setRegisterLoader] = useState("");

    const [isLoginSubmit, setIsLoginSubmit] = useState(false);
    const [loginErrors, setLoginErrors] = useState("");
    const [loginLoader, setLoginLoader] = useState("");

    const [registerValues, setRegisterValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        mobile: "",
    })

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    })

    const generateLoginError = (err) => {
        if (err) {
            setLoginErrors(err)
        }

    }

    const handleLoginChange = (event) => {
        setIsLoginSubmit(false)
        setLoginErrors("")
        const { name, value } = event.target;
        setLoginValues((preValues) => {
            return {
                ...preValues,
                [name]: value,
            }
        })

        console.log(loginErrors)

    }


    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setLoginErrors(ValidateLogin(loginValues));
        setIsLoginSubmit(true);
    }



    useEffect(() => {

        const handleLogin = async () => {
            
            try {
                const { data } = await axios.post("http://localhost:3001/signin", {
                    ...loginValues,
                }, {
                    withCredentials: true,
                });
    
                if (data) {
                    if (data.errors) {
                        generateLoginError(data.errors)
                    } else {
                        setLoginLoader(false)
                        navigate("/dashboard")
                    }
                }
            } catch (error) {
                console.log(error.message)
            }


            
        }

        

        if (Object.keys(loginErrors).length === 0 && isLoginSubmit) {
            handleLogin();
            setLoginLoader(true)
        }

    }, [loginErrors, isLoginSubmit, loginValues])// eslint-disable-line react-hooks/exhaustive-deps








    const generateRegisterError = (err) => {
        if (err) {
            setRegisterErrors(err)
        }

    }

    const handleRegisterChange = (event) => {
        setIsRegisterSubmit(false)
        setRegisterErrors("")
        const { name, value } = event.target;
        setRegisterValues((preValues) => {
            return {
                ...preValues,
                [name]: value,
            }
        })

        console.log(registerErrors)

    }


    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        setRegisterErrors(Validate(registerValues));
        setIsRegisterSubmit(true);
    }

    useEffect(() => {

        const handleRegister = async () => {
            
            try {
                const { data } = await axios.post("http://localhost:3001/signup", {
                    ...registerValues,
                }, {
                    withCredentials: true,
                });
    
                if (data) {
                    if (data.errors) {
                        generateRegisterError(data.errors)
                    } else {
                        setRegisterLoader(false)
                        navigate("/dashboard")
                    }
                }
            } catch (error) {
                console.log(error.message)
            }


            
        }

        

        if (Object.keys(registerErrors).length === 0 && isRegisterSubmit) {
            handleRegister();
            setRegisterLoader(true)
        }

    }, [registerErrors, isRegisterSubmit, registerValues])// eslint-disable-line react-hooks/exhaustive-deps





    return { handleRegisterChange, handleRegisterSubmit, registerValues, registerErrors, registerLoader, handleLoginChange, handleLoginSubmit, loginValues, loginErrors, loginLoader }
}

export default useAccountForms;