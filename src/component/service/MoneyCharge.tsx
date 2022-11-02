import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/table.module.css";
import { GrMoney, GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import inputPriceFormat from "../../prjFunction/commaFunction";

//외부 라이브러리 cdbreact 호출
const cdbreact = require("cdbreact");

//충전하기 버튼 눌렀을 때 실행되는 함수
const submit = (plus: string, ref: React.RefObject<HTMLInputElement>) => {
    if (plus === "") {
        alert("충전액을 입력해주세요.");
        ref.current?.focus();
    }
};

//함수 컴포넌트 시작
const MoneyCharge = () => {
    const [charge, setCharge] = useState(""); //머니 잔액
    const [plus, setPlus] = useState(""); //머니 충전액
    const inputBox = useRef<HTMLInputElement>(null); // 머니 충전액 ref
    const [total, setTotal] = useState(""); //충전 결과액

    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact; //외부 라이브러리 cdbreact hook 사용

    console.log("머니충전 시작");

    useEffect(() => {
        // AJAX로 머니 잔액 불러와야 함, 가맹점 선택시 AJAX 연동해야 함.
        // 성공, 실패, 로딩 중 처리
    }, []);

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
                {/* <TransactionTable
                    header={["계정명", "금액"]}
                    data={[
                        ["머니 잔 액", "0원"],
                        ["머니 충전액", ""],
                        ["충전 결과액", "20000"],
                    ]}
                    tableClassName={styles.transactionTable}
                /> */}
                {/* <div>
                    <div className={styles.items}>
                        <div>이름</div>
                        <div>금액 </div>
                    </div>
                    <div className={styles.items}>
                        <div>머니 잔 &nbsp;액</div>
                        <div>
                            <input
                                type="text"
                                readOnly
                                value={charge}
                                onChange={(e: any) => {
                                    setCharge(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div>머니 충전액</div>
                        <div>
                            <input style={{ display: "inline-block" }} type="number" /> <span>원</span>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div>충전 결과액</div>
                        <div>
                            <input type="text" readOnly={true} />
                        </div>
                    </div>
                    <div className={styles.items} style={{ borderBottom: "none" }}>
                        <button type="button">충전하기</button>
                    </div>
                </div> */}
            </article>
        </>
    );
};

export default MoneyCharge;
