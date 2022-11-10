import "./registration.style.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { ReactComponent as Arrow } from "../../icons/Arrow.svg";
import { ReactComponent as Calculator } from "../../icons/Calculator.svg";

const registration = () => {
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
                            <CustomInput
                                type="text"
                                label={"First name"}
                                name={"firstName"}
                                placeholder={"Enter first name"}
                                // value={article.caption}
                                // handleChange={handleChange}
                            />
                            <CustomInput
                                type="text"
                                label={"Last name"}
                                name={"lastName"}
                                placeholder={"Enter last name"}
                                // value={article.caption}
                                // handleChange={handleChange}
                            />
                        </div>

                        <div className={"email-password-group"}>
                            <CustomInput
                                type="text"
                                label={"Email"}
                                name={"email"}
                                placeholder={"Enter email"}
                                // value={article.caption}
                                // handleChange={handleChange}
                            />
                            <PasswordInput
                                label={"Password"}
                                name={"password"}
                                placeholder={"Enter password"}
                                // value={password.confirmPassword}
                                // handleChange={handleChange}
                            />
                        </div>
                    </form>

                    <div className={"registration-auxiliary-button-div"}>
                        <button className={"registration-button-for-link"}>
                            I already have an account.
                        </button>
                    </div>

                    <div className={"registration-auxiliary-sign-up"}>
                        <button className={"registration-button-sign-up"}>
                            Sign up
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default registration;