import "./custom-resul-text.style.css";
import React from "react";

const CustomResultText = ({ resultValue, label, ...otherProps }) => {
    return (
        <div className={"result-container"}>
            <label className="result-label" htmlFor="input">{label}</label>
            <div>
                {resultValue}
            </div>
        </div>
    );
};

export default CustomResultText;