import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import List from "./socialLogin/list";
import styles from "../css/login.module.css";
import Movemain from "./socialLogin/movemain";

/**
 * @typedef {Object} LoginType
 * @property {string} memberID 회원아이디
 * @property {string} memberPW 회원암호
 */
export type LoginType = {
    memberID: string;
    memberPW: string;
    check: string;
};

/**
 * @typedef {Object} SocialLoginType
 * @property {string} email 회원이메일
 * @property {string} name 회원이름
 */
export type SocialLoginType = {
    email: string;
    name: string;
    check: string;
};

/**
 * 로그인 화면을 보여줍니다.
 * @returns Login JSX
 */
const Login = () => {
    /** 이미지 저장 리스트 변수
     * @type {string[]} url 이미지 리스트
     */
    const imgList: string[] = ["url('./img/2.jpg')", "url('./img/4.jpg')", "url('./img/5.jpg')"];

    /** redux에 저장한 state 호출(state : 회원정보)  */
    const loginCheck = useSelector((state: any) => state.value);

    /** useNaviagte hook 호출 */
    const navigate = useNavigate();

    /** redux dispatch(update) 함수 호출 */
    const dispatch = useDispatch();

    /** {아이디, 암호} state
     * @typedef {Object} Info
     */
    /**
     * @callback InfoSetter
     * @param {Info} state
     * @returns {void}
     */
    const [
        /**@type {Info} */
        info,
        /**@type {InfoSetter} */
        setInfo,
    ] = useState<LoginType>({ memberID: "", memberPW: "", check: "false" });

    /** {이미지} state */
    const [img, setImg] = useState("url('./img/2.jpg')");

    /** 한 번 렌더링 후 로그인이 되어 있으면 /main/member 로 redirect  */
    useEffect(() => {
        if (loginCheck?.mnum) {
            navigate("/main/member");
        }
    }, [loginCheck, navigate]);

    /** 한 번 렌더링 후 배경이미지 결정 */
    useEffect(() => {
        const imgF = () => {
            let num: number = Math.floor(Math.random() * 3);
            //이미지 state 변경
            setImg(imgList[num]);
        };

        //20초마다 배경이미지 변경
        setInterval(imgF, 20000);
    }, [img]);

    /**
     * @param prop []
     * @return 회원정보 저장하는 콜백 함수
     */
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

    /**
     * @param e [React.MouseEvent]
     * @returns  ID체크, PW체크 그 후 로그인 콜백 함수
     */
    const Click = async (e: React.MouseEvent) => {
        try {
            e.preventDefault();
            if (info.memberID === "") {
                alert("ID를 입력하시길 바랍니다.");
                return;
            }

            if (info.memberPW === "") {
                alert("비밀번호를 입력하시길 바랍니다.");
                return;
            }
            let data: LoginType = { ...info };
            await Movemain(data, navigate, dispatch);
        } catch (err) {
            console.log(err);
            alert("아이디 또는 암호를 확인해주세요.");
            return;
        }
    };

    return (
        <>
            <div
                className={styles.loginMainPageImage}
                style={{
                    backgroundImage: img,
                }}
            ></div>
            <div className={styles.loginContainer}>
                <div>
                    <form action="post">
                        <table className={styles.tableContainer}>
                            <thead>
                                <tr>
                                    <td colSpan={2}>
                                        <span
                                            style={{
                                                color: "rgba(255,64,64)",
                                                textShadow: "0.5px 0.5px 0.5px black",
                                            }}
                                        >
                                            E4NET 시스템
                                        </span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: "50px" }}>
                                        <span
                                            style={{
                                                color: "rgba(255,64,64)",
                                            }}
                                        >
                                            ID
                                        </span>
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
                                    <td style={{ width: "50px" }}>
                                        <span
                                            style={{
                                                color: "rgba(255,64,64)",
                                            }}
                                        >
                                            PW
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="password"
                                            autoComplete="off"
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
                                로그인
                            </button>
                            <button type="button" style={{ fontSize: "15px" }}>
                                비밀번호찾기
                            </button>
                        </div>
                        <p style={{ marginTop: "20px" }}>
                            아직 회원이 아니십니까? <Link to={"/signUp"}>회원가입</Link>
                        </p>
                    </form>
                </div>
                <div style={{ marginTop: "10px", width: "400px", height: "100px" }}>
                    <List navigate={navigate} dispatch={dispatch} />
                </div>
            </div>
        </>
    );
};

export default Login;
