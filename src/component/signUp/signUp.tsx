import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "../../css/signup.module.css";
import Button from "./button";
import CustomSelectBox from "./countrycode";
import E4netHeader from "./e4netHeader";
import Errmsg from "./errmsg";
import "bootstrap/dist/css/bootstrap.css";
import { useCookies } from "react-cookie";
import { checkButton } from "../../prjFunction/checkButton";
import changeF from "../../prjFunction/changeF";
import Postcode from "../../lib/PostCode";

type allCheck = {
    id: boolean;
    pw: boolean;
    pwCheck: boolean;
    name: boolean;
    phone: boolean;
    address: boolean;
    email: boolean;
};

export type { allCheck };

type vald = {
    id: string;
    pw: string;
    pwCheck: string;
    name: string;
    phone: { phone1?: string; phone2?: string; phone3?: string };
    address: { address1?: string; address1_2?: string; address2?: string; address3?: string };
    email: { email1: string; email2: string };
};

export type { vald };

// 중복확인
const test = (key: string, keyCheck: boolean, setAllcheck: Function, allcheck: object) => {
    if (true) {
        alert("사용할 수 있는 아이디입니다.");
        let dd = { [key]: keyCheck };
        setAllcheck({ ...allcheck, ...dd });
    }
    // else{
    //     alert("중복된 ID 입니다. 확인 해 주세요.");
    // }
};

// const test2 = (key: object, setAllcheck: Function, allcheck: object) => {
//     if (true) {
//         alert("휴대폰 인증이 되었습니다.");
//         let dd = { [key]: keyCheck };
//         setAllcheck({ ...allcheck, ...dd });
//     }
//     else{
//         alert("중복된 ID 입니다. 확인 해 주세요.");
//     }
// };

const SignUp = () => {
    const checkF = (key: string, keyCheck: boolean) => {
        let dd = { [key]: keyCheck };
        setAllcheck({ ...allcheck, ...dd });
    };

    const [cookies, setCookie] = useCookies(["id"]);

    const memberInfo = useSelector((state: any) => {
        return state?.value;
    });

    let memberModify = {};

    const [value, setValue] = useState({
        idCheck: false,
        mobileCheck: false,
        emailCheck: true,
        addressCheck: false,
    });

    const [allcheck, setAllcheck] = useState<allCheck>({
        id: false,
        pw: false,
        pwCheck: false,
        name: false,
        phone: false,
        address: false,
        email: false,
    });

    const [focus, setFocus] = useState({
        idFocus: false,
        pwFocus: false,
        pwCheckFocus: false,
        nameFocus: false,
        phoneFocus: false,
        emailFocus: false,
        addressFocus: false,
    });

    const [vald, setVald] = useState<vald>({
        id: "",
        pw: "",
        pwCheck: "",
        name: "",
        phone: { phone1: "010", phone2: "", phone3: "" },
        address: { address1: " ", address1_2: "", address2: " ", address3: " " },
        email: { email1: "", email2: "" },
    });

    useEffect(() => {}, [focus]);

    useEffect(() => {
        console.log(allcheck);
    }, [allcheck]);
    useEffect(() => {
        console.log(value);
    }, [value]);
    useEffect(() => {
        console.log(vald);
    }, [vald]);

    // useEffect(() => {
    //     if (memberInfo?.mnum !== undefined) {
    //         memberModify = { readOnly: true };
    //         let member = {
    //             id: memberInfo?.id,
    //             pw: memberInfo?.pw,
    //             pwCheck: memberInfo?.pwCheck,
    //             name: memberInfo?.name,
    //             phone: memberInfo?.phone,
    //             email: memberInfo?.email,
    //         };
    //         setVald(member);
    //     } else {
    //         memberModify = { readOnly: false };
    //     }
    // }, []);

    const buttonAble = (prop: object) => {
        setValue({ ...value, ...prop }), [value];
    };

    const submit = (e: React.MouseEvent) => {
        checkButton(allcheck);
        console.log(vald);
        const expires = new Date();
        expires.setFullYear(expires.getMinutes() + 10);
        setCookie("id", vald.id, { maxAge: 2000 });
    };

    return (
        <>
            {memberInfo?.mnum === undefined && <E4netHeader />}
            <div>
                <div className={styles.signUpdivContainer}>
                    {memberInfo?.mnum === undefined ? <h1> 카드 시스템 회원 가입</h1> : <h1> 카드 시스템 정보 수정</h1>}
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
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    onFocus={() => setFocus({ ...focus, idFocus: true })}
                                                    {...memberModify}
                                                />
                                            </div>
                                        </td>
                                        <td className={styles.btnTd}>
                                            {
                                                <Button
                                                    check={value.idCheck}
                                                    text="중복확인"
                                                    btnF={() => test("id", true, setAllcheck, allcheck)}
                                                />
                                            }
                                        </td>
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
                                                    autoComplete="off"
                                                    value={vald.pw}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
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
                                            keyss="pw"
                                            checkF={(trueOrFalse: boolean) => checkF("pw", trueOrFalse)}
                                            allCheck={allcheck}
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
                                                    autoComplete="off"
                                                    value={vald.pwCheck}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
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
                                            keyss="pwCheck"
                                            checkF={(trueOrFalse: boolean) => checkF("pwCheck", trueOrFalse)}
                                            allCheck={allcheck}
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
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
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
                                            keyss="name"
                                            checkF={(trueOrFalse: boolean) => checkF("name", trueOrFalse)}
                                        />
                                    )}

                                    <tr>
                                        <td colSpan={3}>
                                            휴대폰번호<span className={styles.redColor}>•</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1}>
                                            <div>
                                                <CustomSelectBox
                                                    boxF={(e: React.MouseEvent<HTMLElement>) => {
                                                        let abc = {
                                                            phone: { ...vald.phone, phone1: e.currentTarget.innerText },
                                                        };
                                                        let change = {
                                                            ...vald,
                                                            ...abc,
                                                        };
                                                        console.log(change);
                                                        return setVald(change);
                                                    }}
                                                />
                                                <span className={styles.signUpspanline}>-</span>
                                                <input
                                                    type="text"
                                                    id="phone2"
                                                    value={vald.phone.phone2}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    style={{ width: "150px" }}
                                                />
                                                <span className={styles.signUpspanline}>-</span>
                                                <input
                                                    type="text"
                                                    id="phone3"
                                                    value={vald.phone.phone3}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    style={{ width: "150px" }}
                                                />
                                            </div>
                                        </td>
                                        <td className={styles.btnTd} colSpan={2}>
                                            <Button
                                                check={!value.mobileCheck}
                                                text="인증"
                                                btnF={() => {
                                                    let phoneNumber: object = { ...vald };
                                                    // test2(phoneNumber, true, setAllcheck, allcheck);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            우편번호<span className={styles.redColor}>•</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1}>
                                            <div style={{ textAlign: "left" }}>
                                                <input
                                                    type="text"
                                                    id="addres1"
                                                    value={vald.address.address1}
                                                    readOnly
                                                    style={{ width: "100px", margin: "0" }}
                                                    className={styles.readonlyNoneColor}
                                                />
                                            </div>
                                        </td>

                                        <td className={styles.btnTd} colSpan={2}>
                                            <div style={{ marginLeft: "-200px", width: "100px" }}>
                                                <Postcode
                                                    btnF={(zonecode: string, fullAddress: string) => {
                                                        setVald({
                                                            ...vald,
                                                            address: { address1: zonecode, address2: fullAddress },
                                                        });
                                                        setValue({
                                                            ...value,
                                                            addressCheck: true,
                                                        });
                                                        setAllcheck({
                                                            ...allcheck,
                                                            address: true,
                                                        });
                                                    }}
                                                />
                                            </div>
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
                                                    id="addres2"
                                                    className={styles.readonlyNoneColor}
                                                    value={vald.address.address2}
                                                    readOnly
                                                    placeholder="주소"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>상세주소</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <div>
                                                <input
                                                    type="text"
                                                    id="address3"
                                                    defaultValue={vald.address.address3}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    onFocus={() => setFocus({ ...focus, addressFocus: true })}
                                                    readOnly={!value.addressCheck}
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td colSpan={3}>
                                            이메일<span className={styles.redColor}>•</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <div style={{ width: "50%", margin: 0 }}>
                                                <input
                                                    type="text"
                                                    id="email1"
                                                    value={vald.email.email1}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    placeholder="이메일"
                                                    onFocus={() => setFocus({ ...focus, emailFocus: true })}
                                                />
                                                <span style={{ fontSize: "25px", marginLeft: "20px" }}>@</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    right: "-10px",
                                                    marginLeft: "-115px",
                                                    paddingRight: 0,
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    id="email2"
                                                    value={vald.email.email2}
                                                    onChange={(props: React.ChangeEvent<HTMLInputElement>) =>
                                                        changeF({ props, vald, setVald, allcheck, setAllcheck })
                                                    }
                                                    readOnly={value.emailCheck}
                                                    style={{
                                                        position: "relative",
                                                        right: "39%",
                                                        marginRight: "-30%",
                                                        paddingRight: 0,
                                                        width: "180%",
                                                    }}
                                                />
                                                <CustomSelectBox
                                                    dataList={["naver.com", "daum.net", "직접입력"]}
                                                    width="150%"
                                                    boxF={(e: React.MouseEvent<HTMLElement>) => {
                                                        let abc = {
                                                            email: { ...vald.email, email2: e.currentTarget.innerText },
                                                        };

                                                        let change = {
                                                            ...vald,
                                                            ...abc,
                                                        };

                                                        if (e.currentTarget.innerText === "직접입력") {
                                                            abc = {
                                                                email: { ...vald.email, email2: "" },
                                                            };
                                                            change = {
                                                                ...vald,
                                                                ...abc,
                                                            };
                                                            console.log(value);
                                                            setValue({ ...value, emailCheck: false });
                                                            return setVald(change);
                                                        }
                                                        console.log(allcheck);
                                                        setValue({ ...value, emailCheck: true });
                                                        setVald(change);
                                                        return;
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    {focus.emailFocus && (
                                        <Errmsg
                                            msg={["이메일을 입력해주세요.", "이메일을 확인해주세요."]}
                                            pattern={/^[a-zA-Z0-9+-\_.]{5,}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
                                            word={vald.email.email1 + "@" + vald.email.email2}
                                            buttonAble={() => {}}
                                            keyss="email"
                                            checkF={(trueOrFalse: boolean) => checkF("email", trueOrFalse)}
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
                                style={{ margin: "30px auto", backgroundColor: "rgb(255,64,64)" }}
                            >
                                전송
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

//  1. formdata 한번에 암호화해서 보내나요?
//  2. 할일 - 빨간글씨 뜨게하기 인증
