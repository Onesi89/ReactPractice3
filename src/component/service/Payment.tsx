import React from "react";
import styles from "../../css/moneyCharge.module.css";
import { GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import { MdPayment } from "react-icons/md";
import CustomSelectBox from "../signUp/countrycode";

const Payment = () => {
    return (
        <>
            <TopBanner>
                <GrTransaction />
                &nbsp;서비스 {">"} 머니결제
            </TopBanner>
            <article className={styles.moneychargeContainer}>
                <header>
                    <MdPayment />
                    <span>&nbsp;&nbsp;머니 결제</span>
                </header>
                <div>
                    <div className={styles.items}>
                        <div>이름</div>
                        <div>선택</div>
                    </div>
                    <div className={styles.items}>
                        <div>가&nbsp;맹&nbsp;점</div>
                        <CustomSelectBox dataList={["A지점", "B지점"]} height={"80%"} superName={"payment1"} />
                    </div>
                    <div className={styles.items}>
                        <div>구매물품</div>
                        <CustomSelectBox dataList={["A물품", "B물품"]} height={"100%"} superName={"payment2"} />
                    </div>
                    <div className={styles.items}>
                        <div>결제금액</div>
                        <div>
                            <input type="text" readOnly />
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div>결제수단</div>
                        <CustomSelectBox
                            dataList={["선불머니", "카드", "계좌이체"]}
                            height={"100px"}
                            superName={"payment2"}
                        />
                    </div>
                    <div className={styles.items} style={{ borderBottom: "none" }}>
                        <button type="button">결제하기</button>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Payment;
