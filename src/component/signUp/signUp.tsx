import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../css/signup.module.css";
import Button from "./button";
import Countrycode from "./countrycode";
import E4netHeader from "./e4netHeader";
import Errmsg from "./errmsg";
import "bootstrap/dist/css/bootstrap.css";

const SignUp = () => {
    const memberInfo = useSelector((state: any) => {
        return state?.value;
    });

    let memberModify = {};
    const [value, setValue] = useState({
        idCheck: false,
        mobileCheck: false,
        emailCheck: false,
        allCehck: false,
    });

    const [focus, setFocus] = useState({
        idFocus: false,
        pwFocus: false,
        pwCheckFocus: false,
        nameFocus: false,
        numberFocus: false,
        emailFocus: false,
    });

    const [vald, setVald] = useState({
        id: "",
        pw: "",
        pwCheck: "",
        name: "",
        number: "",
        email: "",
    });

    useEffect(() => {
        console.log(memberInfo.size);
        if (memberInfo.size !== undefined) {
            memberModify = { readOnly: true };
            let member = {
                id: memberInfo?.id,
                pw: memberInfo?.pw,
                pwCheck: memberInfo?.pwCheck,
                name: memberInfo?.name,
                number: memberInfo?.number,
                email: memberInfo?.email,
            };
            setVald(member);
        } else {
            memberModify = { readOnly: false };
        }
    }, []);

    // 얘네들 필요 있을지 생각해보자 - useEffect 들
    // useEffect(() => {
    //     console.log("focus");
    // }, [focus]);
    // useEffect(() => {
    //     console.log("vald");
    // }, [vald]);
    // useEffect(() => {
    //     console.log("value");
    // }, [value]);

    const buttonAble = (prop: object) => {
        setValue({ ...value, ...prop }), [value];
    };

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
        <>
            <E4netHeader />
            <div className={styles.signUpdivContainer}>
                {memberInfo.size === undefined ? <h1> 카드 시스템 회원 가입</h1> : <h1> 카드 시스템 정보 수정</h1>}
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
                                                onFocus={() => setFocus({ ...focus, idFocus: true })}
                                                {...memberModify}
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.btnTd}>{<Button check={value.idCheck} />}</td>
                                </tr>
                                {focus.idFocus && (
                                    <Errmsg
                                        msg={[
                                            "로그인 아이디를 입력해주세요",
                                            "영어 대소문자 또는 숫자를 포함하여 8-15자이어야합니다.",
                                        ]}
                                        pattern={/^[A-Za-z][A-Za-z\?(0-9)]{7,14}/}
                                        word={vald.id}
                                        buttonAble={buttonAble}
                                        keyss="idCheck"
                                    />
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
                                                type="password"
                                                id="pw"
                                                value={vald.pw}
                                                onChange={changeF}
                                                placeholder="비밀번호"
                                                onFocus={() => setFocus({ ...focus, pwFocus: true })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                {focus.pwFocus && (
                                    <Errmsg
                                        msg={[
                                            "비밀번호를 입력해주세요",
                                            "영어 대문자,소문자,숫자를 각 1개 이상 포함하여 10자 이상이어야합니다.",
                                        ]}
                                        pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/gm}
                                        word={vald.pw}
                                        buttonAble={buttonAble}
                                        keyss=""
                                    />
                                )}
                                <tr>
                                    <td colSpan={3}>
                                        비밀번호 확인<span className={styles.redColor}>•</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <div>
                                            <input
                                                type="password"
                                                id="pwCheck"
                                                value={vald.pwCheck}
                                                onChange={changeF}
                                                placeholder="비밀번호 확인"
                                                onFocus={() => setFocus({ ...focus, pwCheckFocus: true })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                {focus.pwCheckFocus && (
                                    <Errmsg
                                        msg={["비밀번호를 한번 더 입력해주세요", "비밀번호가 일치하지않습니다."]}
                                        pattern={RegExp("^" + vald.pw + "$")}
                                        word={vald.pwCheck}
                                        buttonAble={buttonAble}
                                        keyss=""
                                    />
                                )}
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
                                                onFocus={() => setFocus({ ...focus, nameFocus: true })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                {focus.nameFocus && (
                                    <Errmsg
                                        msg={["이름을 입력해주세요", "이름은 두 글자 이상입니다."]}
                                        pattern={/[가-힣]{2,10}/}
                                        word={vald.name}
                                        buttonAble={buttonAble}
                                        keyss=""
                                    />
                                )}

                                <tr>
                                    <td colSpan={3}>
                                        휴대전화 번호<span className={styles.redColor}>•</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "30%" }}>
                                        <Countrycode />
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
                                                onFocus={() => setFocus({ ...focus, numberFocus: true })}
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.btnTd}>
                                        <Button check={value.mobileCheck} />
                                    </td>
                                </tr>
                                {focus.numberFocus && (
                                    <Errmsg
                                        msg={["전화번호를 입력해주세요..", "전화번호를 확인해주세요."]}
                                        pattern={/^[0-9]{10,11}$/}
                                        word={vald.number}
                                        buttonAble={buttonAble}
                                        keyss="mobileCheck"
                                    />
                                )}
                                <tr>
                                    <td colSpan={3}>
                                        우편번호<span className={styles.redColor}>•</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div>
                                            <input
                                                type="text"
                                                // id="email"
                                                value={vald.email}
                                                onChange={changeF}
                                                style={{ width: "200px" }}
                                            />
                                            <span
                                                style={{
                                                    width: "50px",
                                                    display: "inline-block",
                                                    fontSize: "40px",
                                                    textAlign: "center",
                                                    position: "relative",
                                                    top: "-10px",
                                                }}
                                            >
                                                ―
                                            </span>
                                            <input
                                                type="text"
                                                // id="email"
                                                value={vald.email}
                                                onChange={changeF}
                                                style={{ width: "200px" }}
                                            />
                                        </div>
                                    </td>

                                    <td className={styles.btnTd}>
                                        <Button check={value.emailCheck} text="전송" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        주소<span className={styles.redColor}>•</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <div>
                                            <input
                                                type="text"
                                                // id="email"
                                                value={vald.email}
                                                onChange={changeF}
                                                placeholder="주소"
                                                onFocus={() => setFocus({ ...focus, emailFocus: true })}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        상세주소<span className={styles.redColor}>•</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <div>
                                            <input
                                                type="text"
                                                // id="email"
                                                value={vald.email}
                                                onChange={changeF}
                                                placeholder="상세주소"
                                                onFocus={() => setFocus({ ...focus, emailFocus: true })}
                                                readOnly
                                            />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={3}>
                                        본인확인 이메일<span className={styles.redColor}>•</span>
                                    </td>
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
                                                onFocus={() => setFocus({ ...focus, emailFocus: true })}
                                            />
                                        </div>
                                    </td>
                                    <td className={styles.btnTd}>
                                        <Button check={value.emailCheck} />
                                    </td>
                                </tr>
                                {focus.emailFocus && (
                                    <Errmsg
                                        msg={["이메일을 입력해주세요.", "이메일을 확인해주세요."]}
                                        pattern={/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
                                        word={vald.email}
                                        buttonAble={buttonAble}
                                        keyss="emailCheck"
                                    />
                                )}
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
                            style={
                                !value.allCehck
                                    ? { margin: "30px auto", backgroundColor: "grey" }
                                    : { margin: "30px auto", backgroundColor: "#03c75a" }
                            }
                        >
                            전송
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;

//  1. formdata 한번에 암호화해서 보내나요?
//  2. 할일 - 빨간글씨 뜨게하기 인증
