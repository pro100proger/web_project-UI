import { useState } from "react";
import { ReactComponent as PasswordEye } from "../../icons/Eye.svg";
import "./password-input.style.css";
import CustomInput from "../CustomInput/CustomInput";

const PasswordInput = ({ ...otherProps }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const v = otherProps.value?.length ? "block" : "none";
    return (
        <div className="password-container">
            <CustomInput type={passwordShown ? "text" : "password"} {...otherProps} />
            <PasswordEye
                className={otherProps.label ? "eye eye-with-label" : "eye"}
                style={{ display: v }}
                onClick={() => setPasswordShown(!passwordShown)}
            />
        </div>
    );
};

export default PasswordInput;