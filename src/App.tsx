import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Headers from "./component/Header";
import Login from "./component/login";
import { useSelector } from "react-redux";
import SignUp from "./component/signUp/signUp";
import MoneyCharge from "./component/service/MoneyCharge";
import Payment from "./component/service/Payment";
import Transaction from "./component/service/Transaction";
import Error from "./component/Loding_Error/Error";
import Loding from "./component/Loding_Error/Loding";

const EditMemberInfo = React.lazy(() => import("./component/Member/EditMemberInfo"));

/**월별 머니 충전액, 월별 머니 결제액을 차트로 보여줍니다. */
const Main = React.lazy(() => import("./component/Main"));

const App: React.FC = () => {
    /** @retrun redux에 저장된 값 호출 */
    let loginCheck = useSelector((state: any) => {
        return state?.value;
    });

    if (!loginCheck?.mnum) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Headers />}>
                    <Route
                        path="/main/member"
                        element={
                            <Suspense fallback={<Loding />}>
                                <Main />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/main/editMemberInfo"
                        element={
                            <Suspense fallback={<Loding />}>
                                <EditMemberInfo />
                            </Suspense>
                        }
                    />
                    <Route path="/main/moneyCharge" element={<MoneyCharge />} />
                    <Route path="/main/payment" element={<Payment />} />
                    <Route path="/main/transation" element={<Transaction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
