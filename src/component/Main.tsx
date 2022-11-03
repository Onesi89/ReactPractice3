import React, { Suspense } from "react";
import { FiStar, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../css/mainPage.module.css";
import TopBanner from "../lib/topBanner";
import { instance } from "./ajaxRequest/ajaxRequest";
import LodingSmall from "./Loding_Error/Loding";

/**
 * 로그인 후 보여주는 첫 화면입니다.
 * 월별 머니 충전액, 월별 머니 결제액을 보여줍니다.
 * @returns 로그인 후 보여주는 첫 화면입니다.
 * 월별 머니 충전액, 월별 머니 결제액을 보여줍니다.
 */
const Main = () => {
    const ChargeGraph = React.lazy(() => import("./graph/customGraph"));
    const PaymentGraph = React.lazy(() => import("./graph/customGraph"));

    return (
        <>
            <TopBanner>
                <FiStar />
                <span>&nbsp;바로가기 {">"} 홈</span>
            </TopBanner>
            <article className={styles.mainContainer}>
                <header>
                    <FiHome />
                    <span>&nbsp;&nbsp;홈</span>
                </header>
                <div>
                    <Suspense fallback={<LodingSmall />}>
                        <section>
                            <span>
                                {"<"}월별 머니충전금액{">"}
                            </span>
                            <Link to="/#"> 충전하기&nbsp;</Link>
                            <Link to="/#"> 거래내역</Link>
                            <ChargeGraph />
                            {/* ajax 연결 부분 */}
                            {/* <ChargeGraph dataList={ async()=> await instance.get("")} /> */}
                        </section>
                    </Suspense>
                    <Suspense fallback={<LodingSmall />}>
                        <section>
                            <span>
                                {"<"}월별 머니결제금액{">"}
                            </span>
                            <Link to="/#"> 결제하기&nbsp;</Link>
                            <Link to="/#"> 거래내역</Link>
                            <PaymentGraph />
                            {/* ajax 연결 부분 */}
                            {/* <PaymentGraph dataList={ async()=> await instance.get("")} /> */}
                        </section>
                    </Suspense>
                </div>
            </article>
        </>
    );
};

export default Main;
