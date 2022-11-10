import "./login.style.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { ReactComponent as Arrow } from "../../icons/Arrow.svg";
import {ReactComponent as Calculator} from "../../icons/Calculator.svg";

const login = () => {
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
                    </form>

                    <div className={"auxiliary-button-div"}>
                        <button className={"button-for-link"}>
                            Don't have account yet
                        </button>
                    </div>

                    <button className={"login-button-sign-in"}>
                        Sign in
                    </button>

                </div>
            </div>

        </div>
    );
}

export default login;
