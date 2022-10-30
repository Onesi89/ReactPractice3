import React, { useState } from "react";
import styles from "../../css/moneyCharge.module.css";
import { GrMoney, GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";

const MoneyCharge = () => {
    const [charge, setCharge] = useState(0);

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
                <div>
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
                                onChange={() => {
                                    setCharge;
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
                            <input type="text" readOnly />
                        </div>
                    </div>
                    <div className={styles.items} style={{ borderBottom: "none" }}>
                        <button type="button">충전하기</button>
                    </div>
                </div>
            </article>
        </>
    );
};

export default MoneyCharge;
