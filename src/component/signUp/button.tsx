import React from "react";
import styles from "../../css/signup.module.css";

type buttonProps = {
    check: boolean;
};
const Button = ({ check }: buttonProps) => {
    return (
        <button
            type="button"
            disabled={check}
            style={!check ? { backgroundColor: "grey" } : { backgroundColor: "#03c75a" }}
        >
            인증
        </button>
    );
};

export default Button;
