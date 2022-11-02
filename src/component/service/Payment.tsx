import React, { useEffect, useRef, useState } from "react";
import styles from "../../css/table.module.css";
import { GrTransaction } from "react-icons/gr";
import TopBanner from "../../lib/topBanner";
import { MdPayment } from "react-icons/md";
import CustomSelectBox from "../signUp/countrycode";
import inputPriceFormat from "../../prjFunction/commaFunction";

/* 외부 라이브러리 cdbreact 호출 */
const cdbreact = require("cdbreact");

/* 충전하기 버튼 눌렀을 때 실행되는 함수 */
const submit = (plus: string, ref: React.RefObject<HTMLInputElement>) => {
    if (plus === "") {
        alert("결제금액을 입력해주세요.");
        ref.current?.focus();
    }
};

//함수 컴포넌트 시작
const Payment = () => {
    /*변수*/
    const [payment, setPayment] = useState({
        franchisee: "",
        goods: "",
        pay: "",
        methodOfPayment: "선불머니",
    });
    /* 결제금액 ref*/
    const inputBox = useRef<HTMLInputElement>(null);

    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact; //외부 라이브러리 cdbreact hook 사용

    console.log("머니결제 시작");

    useEffect(() => {
        // "AJAX 작업 필요 =>  "
        let payment = {
            franchisee: "",
            goods: "",
            pay: "",
            methodOfPayment: "선불머니",
        };
        setPayment(payment);
    }, []);

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
                <CDBContainer>
                    <CDBTable striped hover responsiveMd className={styles.MoneyChargeTable}>
                        <CDBTableHeader>
                            <tr>
                                <th>계정명</th>

                                <th>선택</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            <tr className={styles.PaymentCommTr}>
                                <td>가&nbsp;&nbsp;맹&nbsp;&nbsp;점</td>
                                <td>
                                    <div style={{ height: "80%" }}>
                                        <CustomSelectBox
                                            dataList={["A지점", "B지점"]}
                                            superName={"payment1"}
                                            width={"180px"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.PaymentCommTr}>
                                <td>구매물품</td>
                                <td>
                                    <div style={{ height: "100%" }}>
                                        <CustomSelectBox
                                            dataList={["A물품", "B물품"]}
                                            superName={"payment2"}
                                            width={"180px"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.PaymentCommTr}>
                                <td style={{}}>결제금액</td>
                                <td>
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <input
                                            type="text"
                                            value={payment.pay}
                                            readOnly
                                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            //     setPayment({ ...payment, pay: inputPriceFormat(e.target.value) });
                                            // }}
                                            style={{
                                                border: "0.5px solid rgb(255,64,64)",
                                                boxShadow: "1px 1px 1px red",
                                                width: "180px",
                                                position: "relative",
                                                left: "4px",
                                                top: "5px",
                                            }}
                                            ref={inputBox}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.PaymentCommTr}>
                                <td>결제수단</td>
                                <td>
                                    <div style={{ height: "100%" }}>
                                        <CustomSelectBox
                                            dataList={["선불머니", "카드", "계좌이체"]}
                                            superName={"payment3"}
                                            width={"180px"}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.PaymentCommTr}>
                                <td
                                    colSpan={2}
                                    style={{
                                        borderBottom: "none",
                                    }}
                                >
                                    <button
                                        type="button"
                                        style={{ margin: "0 auto" }}
                                        onClick={() => submit(payment.pay, inputBox)}
                                    >
                                        결제하기
                                    </button>
                                </td>
                            </tr>
                        </CDBTableBody>
                    </CDBTable>
                </CDBContainer>

                {/* <div>
                    <div className={styles.items}>
                        <div>이름</div>
                        <div>선택</div>
                    </div>
                    <div className={styles.items}>
                        <div>가&nbsp;&nbsp;맹&nbsp;&nbsp;점</div>
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
                </div> */}
            </article>
        </>
    );
};

export default Payment;
