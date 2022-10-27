import React, { useState } from "react";
import styles from "../../css/moneyCharge.module.css";
import { GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import { MdPayment } from "react-icons/md";
import CustomSelectBox from "../signUp/countrycode";
import { FaHistory } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Payment = () => {
    const [prevStartDate, setPrevStartDate] = useState(new Date());
    const [nextStartDate, setNextStartDate] = useState(new Date());

    return (
        <>
            <TopBanner>
                <GrTransaction />
                서비스 {">"} 거래 내역
            </TopBanner>
            <article className={styles.moneychargeContainer}>
                <header>
                    <FaHistory />
                    <span>&nbsp;&nbsp;거래 내역</span>
                </header>
                <div>
                    <span>거래기간</span>
                    <div style={{ display: "inline-block", width: "200px" }}>
                        <DatePicker
                            dateFormat={"yyyy-MM-dd"}
                            selected={prevStartDate}
                            onChange={(date: any) => setPrevStartDate(date)}
                        />
                    </div>
                    <div style={{ display: "inline-block", width: "200px" }}>
                        <DatePicker
                            dateFormat={"yyyy-MM-dd"}
                            selected={nextStartDate}
                            onChange={(date: any) => setNextStartDate(date)}
                        />
                    </div>
                    <div>결제수단</div>
                    <CustomSelectBox
                        dataList={["선불머니", "카드", "계좌이체"]}
                        height={"100px"}
                        superName={"payment2"}
                    />
                </div>
            </article>
        </>
    );
};

export default Payment;
