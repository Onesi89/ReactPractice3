import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import elementSize from "../lib/windowSize";
import List from "./socialLogin/list";
import styles from "../css/login.module.css";
import Movemain from "./socialLogin/movemain";

export type LoginType = {
    memberID: string;
    memberPW: string;
    check: string;
};

export type SocialLoginType = {
    email: string;
    name: string;
    check: string;
};

const Login = () => {
    const loginCheck = useSelector((state: any) => state.value);
    const navigate = useNavigate();
    const [info, setInfo] = useState({ memberID: "", memberPW: "", check: "false" });
    const dispatch = useDispatch();

    useEffect(() => {
        if (loginCheck?.mnum) {
            navigate("/main/member");
        }
    }, [loginCheck, navigate]);

    const [ewid, ehei] = elementSize({ w: 400, h: 300 });

    const change = (prop: React.ChangeEvent<HTMLInputElement>) => {
        let changeInfo = {};

        if (prop.target.type === "text") {
            changeInfo = { memberID: prop.target.value };
        } else {
            changeInfo = { memberPW: prop.target.value };
        }

        let prevInfo = { ...info, ...changeInfo };

        setInfo(prevInfo);
    };

    const Click = async (e: React.MouseEvent) => {
        try {
            e.preventDefault();
            let data: LoginType = { ...info };
            await Movemain(data, navigate, dispatch);
        } catch (err) {
            console.log(err);
            alert("아이디 또는 암호를 확인해주세요.");
        }
    };

    return (
        <div
            className={styles.loginContainer}
            style={{
                width: ewid,
                height: ehei,
            }}
        >
            <div>
                <form action="post">
                    <table className={styles.tableContainer}>
                        <thead>
                            <tr>
                                <td colSpan={2}>
                                    <span>로그인</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "50px" }}>
                                    <span>ID</span>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={info?.memberID}
                                        onChange={change}
                                        placeholder="아이디를 입력해주세요"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "25px" }}>
                                    <span>PW</span>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        value={info?.memberPW}
                                        onChange={change}
                                        placeholder="암호를 입력해주세요"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.buttonContainer}>
                        <button type="submit" onClick={(e) => Click(e)}>
                            확인
                        </button>
                        <button type="button">비밀번호찾기</button>
                    </div>
                    <p>
                        아직 회원이 아니십니까?<Link to={"/signUp"}> 회원가입</Link>
                    </p>
                </form>
            </div>
            <div style={{ marginTop: "10px", width: "400px", height: "100px" }}>
                <List navigate={navigate} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default Login;
