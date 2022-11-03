import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/table.module.css";
import { GrMoney, GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import inputPriceFormat from "../../prjFunction/commaFunction";

/**외부 라이브러리 cdbreact 호출 */
const cdbreact = require("cdbreact");

/**
 * @param plus string
 * @param ref React.RefObject
 * @return Ajax 요청 실행되는 함수, 실패시 useRef로 자동 포커스 됨*/
const submit = (plus: string, ref: React.RefObject<HTMLInputElement>) => {
    if (plus === "") {
        alert("충전액을 입력해주세요.");
        ref.current?.focus();
    }
};

/**
 * @details 머니 충전 페이지 JSX
 */
const MoneyCharge = () => {
    const [charge, setCharge] = useState(""); //머니 잔액
    const [plus, setPlus] = useState(""); //머니 충전액
    const inputBox = useRef<HTMLInputElement>(null); // 머니 충전액 ref
    const [total, setTotal] = useState(""); //충전 결과액

    /** 외부 라이브러리 cdbreact hook 사용 */
    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact;

    console.log("머니충전 시작");

    /** 첫 랜더링 이후 AJAX로 머니 잔액 불러옴, 가맹점 선택시 AJAX 연동해야 함*/
    useEffect(() => {}, []);

    return (
        <>
            <TopBanner>
                <GrTransaction />
                &nbsp;서비스 {">"} 머니충전
            </TopBanner>
            <article className={styles.moneychargeContainer}>
                <header>
                    <GrMoney />
                    <span>&nbsp;&nbsp;머니 충전</span>
                </header>
                <CDBContainer>
                    <CDBTable striped hover responsiveMd className={styles.MoneyChargeTable}>
                        <CDBTableHeader>
                            <tr>
                                <th>계&nbsp;정&nbsp;명</th>

                                <th>금&emsp;&emsp;&emsp;&emsp;액</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            <tr>
                                <td>머니 잔&nbsp;&nbsp;&nbsp;액</td>
                                <td>
                                    <input type="text" readOnly value={charge} style={{ outline: "none" }} />
                                    <span>&nbsp;원</span>
                                </td>
                            </tr>
                            <tr>
                                <td>머니 충전액</td>
                                <td>
                                    <input
                                        type="text"
                                        value={plus}
                                        ref={inputBox}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setPlus(inputPriceFormat(e.target.value));
                                            setTotal(inputPriceFormat(e.target.value) + inputPriceFormat(charge));
                                        }}
                                        style={{
                                            border: "0.5px solid rgb(255,64,64)",
                                            boxShadow: "1px 1px 1px red",
                                            textAlign: "center",
                                        }}
                                    />
                                    <span>&nbsp;원</span>
                                </td>
                            </tr>
                            <tr>
                                <td>충전 결과액</td>
                                <td>
                                    <input type="text" readOnly value={total} style={{ outline: "none" }} />
                                    <span>&nbsp;원</span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{
                                        borderBottom: "none",
                                    }}
                                >
                                    <button
                                        type="button"
                                        style={{ margin: "0 auto", marginTop: "10px" }}
                                        onClick={() => submit(plus, inputBox)}
                                    >
                                        충전하기
                                    </button>
                                </td>
                            </tr>
                        </CDBTableBody>
                    </CDBTable>
                </CDBContainer>
            </article>
        </>
    );
};

export default MoneyCharge;
