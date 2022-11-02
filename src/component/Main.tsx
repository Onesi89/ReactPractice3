import React, { Suspense } from "react";
import { FiStar, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "../css/mainPage.module.css";
import TopBanner from "../lib/topBanner";

const Main = () => {
    const ChargeGraph = React.lazy(() => import("./graph/customGraph"));
    const PaymentGraph = React.lazy(() => import("./graph/customGraph"));

    return (
        <>
            <TopBanner>
                <FiStar />
                &nbsp;바로가기 {">"} 홈
            </TopBanner>
            <article className={styles.mainContainer}>
                <header>
                    <FiHome />
                    <span>&nbsp;&nbsp;홈</span>
                </header>
                <div>
                    <Suspense fallback={<p>ChargeGraph 로딩 중입니다.</p>}>
                        <section>
                            <span>
                                {"<"}월별 머니충전금액{">"}
                            </span>
                            <Link to="/#"> 충전하기&nbsp;</Link>
                            <Link to="/#"> 거래내역</Link>
                            <ChargeGraph />
                        </section>
                    </Suspense>
                    <Suspense fallback={<p>PaymentGraph 로딩 중입니다.</p>}>
                        <section>
                            <span>
                                {"<"}월별 머니결제금액{">"}
                            </span>
                            <Link to="/#"> 결제하기&nbsp;</Link>
                            <Link to="/#"> 거래내역</Link>
                            <PaymentGraph />
                        </section>
                    </Suspense>
                </div>
            </article>
        </>
    );
};

export default Main;
