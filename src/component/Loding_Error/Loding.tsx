import React from "react";
import "../../css/loding.css";

const Loding = () => {
    return (
        <>
            <div className="lds-heart">
                <div></div>
            </div>
            <p className="loading">
                <span>Loding 중입니다.</span>
            </p>
        </>
    );
};

export default Loding;
