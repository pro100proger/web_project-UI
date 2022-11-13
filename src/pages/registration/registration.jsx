import "./registration.style.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import {ReactComponent as Arrow} from "../../icons/Arrow.svg";
import {ReactComponent as Calculator} from "../../icons/Calculator.svg";
import {useNavigate} from "react-router-dom";
import login from "../login/login";
import {useState} from "react";
import axios from "axios";

const registration = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState("");

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
        setErrors({...errors, [name]: ''});
    };

    function registerUser(user) {
        console.log("registerUser");
        const sendUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword
        };
        axios.post("http://localhost:8671/eureka/registration", sendUser, {})
            .then((response) => {
                navigate("/login");
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
            registerUser(user)
        } else {
            console.log(errors);
        }
    }

    const validateInput = data => {
        let errors = {}
        if (!/^[A-Za-z]{3,32}$/.test(data.firstName)) {
            errors.firstName = "Name must contain only letters"
        }
        if (!/^[A-Za-z]{3,32}$/.test(data.lastName)) {
            errors.lastName = "Surname must contain only letters"
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(data.email)) {
            errors.email = "Please enter valid email"
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(data.password)) {
            errors.password = "Password must contain at least 8 characters (letters and numbers)"
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(data.confirmPassword)) {
            errors.confirmPassword = "Password must contain at least 8 characters (letters and numbers)"
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
    function login() {
        navigate("/login");
    }

    return (
        <div className={"registration-page"}>
            <div className={"registration-left-photo"}>
                <div className={"registration-logo-and-text"}>
                    <div className={"registration-logo"}>
                        <Calculator/>
                    </div>
                    <div className={"registration-logo-text"}>
                        Calculus
                    </div>
                </div>

                <div className={"registration-text-beneath"}>
                    We will calculate your task!
                </div>

                <Arrow className={"registration-arrow"}/>
            </div>


            <div className={"right-registration"}>
                <div className={"registration-position-div"}>
                    <div className={"lets-start"}>
                        Let's get started!
                    </div>
                    <div className={"registration-addition-text"}>
                        Create your personal account and start calculations.
                    </div>
                    <form className="registration-form-container">
                        <div className={"first-last-name-group"}>
                            <div>
                                {errors.firstName && <p className='input_error'>
                                    {errors.firstName}
                                </p>}
                                <CustomInput
                                    type="text"
                                    label={"First name"}
                                    name={"firstName"}
                                    placeholder={"Enter first name"}
                                    value={user.firstName}
                                    handleChange={handleChange}
                                />
                            </div>
                            <div>
                                {errors.lastName && <p className='input_error'>
                                    {errors.lastName}
                                </p>}
                                <CustomInput
                                    type="text"
                                    label={"Last name"}
                                    name={"lastName"}
                                    placeholder={"Enter last name"}
                                    value={user.lastName}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={"email-group"}>
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
                        </div>
                        <div className={"passwords-group"}>
                            <div>
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
                            </div>
                            <div>
                                {errors.confirmPassword && <p className='input_error'>
                                    {errors.confirmPassword}
                                </p>}
                                <PasswordInput
                                    label={"Password"}
                                    name={"confirmPassword"}
                                    placeholder={"Enter confirm password"}
                                    value={user.confirmPassword}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>

                    <div className={"registration-auxiliary-button-div"}>
                        <button className={"registration-button-for-link"} onClick={login}>
                            I already have an account.
                        </button>
                    </div>

                    <div className={"registration-auxiliary-sign-up"}>
                        <button className={"registration-button-sign-up"} onClick={handleClick}>
                            Sign up
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default registration;