import React from "react";
import "../../css/error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="backContainer1">
            <div className="backContainer">
                <h1>로그인이 필요한 서비스입니다.</h1>
                <p className="zoom-area">
                    <b>로그인</b> 후 이용 가능합니다.
                </p>
                <section className="error-container">
                    <span>
                        <span>4</span>
                    </span>
                    <span>0</span>
                    <span>
                        <span>4</span>
                    </span>
                </section>
                <div className="link-container">
                    <Link className="more-link" to={"/"}>
                        <span>이전으로</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
