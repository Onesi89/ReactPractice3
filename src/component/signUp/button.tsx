import React, { FunctionComponent, useEffect } from "react";
import styles from "../../css/signup.module.css";

type ButtonProps = {
    check: boolean;
    text?: string;
    btnF?: Function;
};

const Button: FunctionComponent<ButtonProps> = ({ check, text = "인증", btnF = () => {} }) => {
    // useEffect(() => {
    //     btnF();
    // }, []);

    return (
        <button
            type="button"
            disabled={!check}
            onClick={() => btnF()}
            style={!check ? { backgroundColor: "grey" } : { backgroundColor: "rgb(255,64,64)" }}
        >
            {text}
        </button>
    );
};

export default Button;
