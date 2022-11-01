import React, { useState } from "react";
import styles from "../../css/moneyCharge.module.css";
import { GrMoney, GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";

const cdbreact = require("cdbreact");

const MoneyCharge = () => {
    const [charge, setCharge] = useState(0);
    const [total, setTotal] = useState(0);
    const [plus, setPlus] = useState(0);

    console.log("머니충전 시작");

    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact;

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
                                <th>계정명</th>

                                <th>금액</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            <tr>
                                <td>머니 잔&nbsp;&nbsp;&nbsp;액</td>
                                <td>
                                    <input type="number" readOnly value={charge} />
                                    <span style={{ position: "relative", left: "-12%" }}>원</span>
                                </td>
                            </tr>
                            <tr>
                                <td>머니 충전액</td>
                                <td>
                                    <input
                                        type="number"
                                        value={plus}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setPlus(Number(e.target.value));
                                            setTotal(Number(e.target.value) + Number(charge));
                                        }}
                                    />
                                    <span style={{ position: "relative", left: "-12%" }}>원</span>
                                </td>
                            </tr>
                            <tr>
                                <td>충전 결과액</td>
                                <td>
                                    <input type="number" readOnly value={total} />
                                    <span style={{ position: "relative", left: "-12%" }}>원</span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{
                                        borderBottom: "none",
                                    }}
                                >
                                    <button type="button" style={{ margin: "0 auto", marginTop: "10px" }}>
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
