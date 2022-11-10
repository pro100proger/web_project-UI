import "./login.style.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import {ReactComponent as Arrow} from "../../icons/Arrow.svg";
import {ReactComponent as Calculator} from "../../icons/Calculator.svg";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState("");

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    function loginUser(user) {
        console.log("loginUser");
        const sendUser = {
            email: user.email,
            password: user.password
        };
        axios.post("https://ujp-sports-hub.herokuapp.com/api/v1/password", sendUser, {})
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate("/");
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("error.response.status: ", error.response.status);
                }
            });
    }

    const handleClick = event => {
        event.preventDefault()
        if (isValid()) {
            loginUser(user)
        } else {
            console.log(errors);
        }
    }

    const validateInput = data => {
        let errors = {}
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(data.email)) {
            errors.email = "Please enter valid email"
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(data.password)) {
            errors.password = "Password must contain at least 8 characters (letters and numbers)"
        }
        return {
            errors,
            isValid: JSON.stringify(errors) === '{}'
        }
    }
    const isValid = () => {
        const {errors, isValid} = validateInput(user)
        if (!isValid) {
            setErrors(errors)
        }
        return isValid
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    function registration() {
        navigate("/registration");
    }


    return (
        <div className={"login-page"}>
            <div className={"left-photo"}>
                <div className={"login-logo-and-text"}>
                    <div className={"login-logo"}>
                        <Calculator/>
                    </div>
                    <div className={"login-logo-text"}>
                        Calculus
                    </div>
                </div>
                <div className={"text-beneath"}>
                    We will calculate your task!
                </div>

                <Arrow className={"login-arrow"}/>
            </div>


            <div className={"right-login"}>
                <div className={"login-position-div"}>
                    <div className={"welcome-back"}>
                        Welcome back!
                    </div>
                    <div className={"addition-text"}>
                        Log in to your account to continue.
                    </div>
                    <form className="form-container">
                        {errors.email && <p className='input_error'>
                            {errors.email}
                        </p>}
                        <CustomInput
                            type="text"
                            label={"Email"}
                            name={"email"}
                            placeholder={"Enter email"}
                            value={user.email}
                            handleChange={handleChange}
                        />
                        {errors.password && <p className='input_error'>
                            {errors.password}
                        </p>}
                        <PasswordInput
                            label={"Password"}
                            name={"password"}
                            placeholder={"Enter password"}
                            value={user.password}
                            handleChange={handleChange}
                        />
                    </form>

                    <div className={"auxiliary-button-div"}>
                        <button className={"button-for-link"} onClick={registration}>
                            Don't have account yet
                        </button>
                    </div>

                    <button className={"login-button-sign-in"} onClick={handleClick}>
                        Sign in
                    </button>

                </div>
            </div>

        </div>
    );
}

export default login;
