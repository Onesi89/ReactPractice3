import React, { FunctionComponent } from "react";
import styles from "../../css/signup.module.css";

type ButtonProps = {
    check: boolean;
    text?: string;
};
const Button: FunctionComponent<ButtonProps> = ({ check, text = "인증" }) => {
    return (
        <button
            type="button"
            disabled={check}
            style={!check ? { backgroundColor: "grey" } : { backgroundColor: "#03c75a" }}
        >
            {text}
        </button>
    );
};

export default Button;
