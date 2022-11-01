import React, { useState } from "react";
import styles from "../../css/moneyCharge.module.css";
import { GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import { MdPayment } from "react-icons/md";
import CustomSelectBox from "../signUp/countrycode";
import { FaHistory } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TransactionTable from "./transactionTable";
import { FiSearch } from "react-icons/fi";
import { FcLeave } from "react-icons/fc";

// import Ko

const Payment = () => {
    const [prevStartDate, setPrevStartDate] = useState(new Date());
    const [nextStartDate, setNextStartDate] = useState(new Date());

    return (
        <>
            <TopBanner>
                <GrTransaction />
                &nbsp;서비스 {">"} 거래내역
            </TopBanner>
            <article className={styles.moneychargeContainer}>
                <header>
                    <FaHistory />
                    <span>&nbsp;&nbsp;거래 내역</span>
                </header>
                <div className={styles.moneychargeTable}>
                    <div>
                        <span>기간</span>
                        <label style={{ display: "flex", flexDirection: "row" }}>
                            <DatePicker
                                dateFormat={"yyyy-MM-dd"}
                                selected={prevStartDate}
                                onChange={(date: any) => setPrevStartDate(date)}
                                selectsStart
                                maxDate={new Date()}
                            />
                            <FcLeave style={{ position: "relative", left: "-15px" }} />
                        </label>
                        <span style={{ margin: 0, width: "15%" }}>-</span>
                        <label style={{ display: "flex", flexDirection: "row" }}>
                            <DatePicker
                                dateFormat={"yyyy-MM-dd"}
                                selected={nextStartDate}
                                onChange={(date: any) => setNextStartDate(date)}
                                selectsEnd
                                minDate={prevStartDate}
                                maxDate={new Date()}
                            />{" "}
                            <FcLeave style={{ position: "relative", left: "-15px" }} />
                        </label>
                    </div>

                    <div>
                        <span>결제수단</span>
                        <div style={{ marginLeft: "-30px", marginTop: "-5px" }}>
                            <CustomSelectBox
                                dataList={["선불머니", "카드", "계좌이체"]}
                                height={"100px"}
                                superName={"payment2"}
                                width={"120px"}
                            />
                        </div>
                    </div>
                    <div>
                        <input type="text" />
                        <FiSearch />

                        {/* 주말에 검색 아이콘 대체 */}
                    </div>
                </div>
                <TransactionTable
                    header={["일자", "처리구분", "결제수단", "상품명", "가맹점명", "처리금액", "처리상태"]}
                    data={[["2020.07.02", "결제", "카드", "-", "여의도", "11,900원", ""], []]}
                    tableClassName={styles.transactionTable}
                />
            </article>
        </>
    );
};

export default Payment;
