import React, { useState, useRef, useEffect } from "react";
import styles from "../../css/signup.module.css";
import Button from "./button";

const SignUp = () => {
    const [value, setValue] = useState({
        loginCheck: true,
        mobileCheck: true,
        emailCheck: true,
        allCehck: true,
    });

    // const test = useRef<HTMLInputElement>(null);

    const ableButton = () => {
        // setValue(false);
    };

    const errmsg = (e: any) => {
        let castString = e.target.id;
        console.log(e);
    };

    const [vald, setVald] = useState({
        id: "",
        pw: "",
        pwCheck: "",
        name: "",
        number: "",
        email: "",
    });

    const submit = (e: React.MouseEvent) => {
        console.log(vald);
    };

    const changeF = (props: React.ChangeEvent<HTMLInputElement>) => {
        const changeF2 = (prevData: any, abc: any) => {
            return { ...prevData, ...abc };
        };
        let change = { ...vald };
        let abc = {};
        switch (props.currentTarget.id) {
            case "id":
                abc = { id: props.target.value };
                change = changeF2(vald, abc);
                break;
            case "pw":
                abc = { pw: props.target.value };
                change = changeF2(vald, abc);
                break;
            case "pwCheck":
                abc = { pwCheck: props.target.value };
                change = changeF2(vald, abc);
                break;
            case "name":
                abc = { name: props.target.value };
                change = changeF2(vald, abc);
                break;
            case "number":
                abc = { number: props.target.value };
                change = changeF2(vald, abc);
                break;
            case "email":
                abc = { email: props.target.value };
                change = changeF2(vald, abc);
                break;
        }

        setVald(change);
    };

    return (
        <div className={styles.signUpdivContainer}>
            <h1> 카드 시스템 ID 회원 가입</h1>
            <div className={styles.lineDiv}></div>
            <div>
                <form action="">
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={3}>
                                    <h3>
                                        회원 정보 입력 <span className={styles.redColor}>필수 항목•</span>
                                    </h3>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <span>
                                        로그인 아이디<span className={styles.redColor}>•</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className={styles.bbb}>
                                <td colSpan={2}>
                                    <div>
                                        <input
                                            id="id"
                                            type="text"
                                            placeholder="로그인 아이디"
                                            required
                                            pattern="^[a-z][a-z0-9].8"
                                            value={vald.id}
                                            onChange={changeF}
                                        />
                                    </div>
                                </td>
                                <td className={styles.btnTd}>
                                    <Button check={value.loginCheck} />
                                </td>
                            </tr>
                            {vald.id.length < 1 ? (
                                <tr className={styles.warnmsg}>
                                    <td>아이디를 입력해주세요</td>
                                </tr>
                            ) : (
                                <tr className={styles.warnmsg}>
                                    <td>아이디는 8글자 이상입니다.</td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={3}>
                                    비밀번호<span className={styles.redColor}>•</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div>
                                        <input
                                            type="paswword"
                                            id="pw"
                                            value={vald.pw}
                                            onChange={changeF}
                                            placeholder="비밀번호"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    비밀번호 확인<span className={styles.redColor}>•</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div>
                                        <input
                                            type="paswword"
                                            id="pwCheck"
                                            value={vald.pwCheck}
                                            onChange={changeF}
                                            placeholder="비밀번호 확인"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    이름<span className={styles.redColor}>•</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            value={vald.name}
                                            onChange={changeF}
                                            placeholder="이름"
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3}>
                                    휴대전화 번호<span className={styles.redColor}>•</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        {/* 다르게 만들기 */}
                                        <select>
                                            <option value="1">지역번호(+82)</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            className={styles.phonNumber}
                                            type="text"
                                            id="number"
                                            value={vald.number}
                                            onChange={changeF}
                                            placeholder="전화번호"
                                        />
                                    </div>
                                </td>
                                <td className={styles.btnTd}>
                                    <Button check={value.mobileCheck} />
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3}>본인확인 이메일</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            value={vald.email}
                                            onChange={changeF}
                                            placeholder="본인확인 이메일"
                                        />
                                    </div>
                                </td>
                                <td className={styles.btnTd}>
                                    <Button check={value.emailCheck} />
                                </td>
                            </tr>
                            <tr className={styles.agree}>
                                <td colSpan={3}>
                                    <span>약관 동의</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div className={styles.signUpcheckboxDiv}>
                                        <input type="checkbox" required />
                                        <div style={{ display: "inline-block" }}>
                                            {/* 모달창 필요필요 */}
                                            <a href="#">
                                                <span>개인정보 및 수집 및 이용</span>
                                            </a>
                                            에 동의합니다.
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        type="button"
                        onClick={submit}
                        style={value.allCehck ? { backgroundColor: "grey" } : { backgroundColor: "#03c75a" }}
                    >
                        전송
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

//  1. formdata 한번에 암호화해서 보내나요?
//  2. 할일 - 빨간글씨 뜨게하기 인증
