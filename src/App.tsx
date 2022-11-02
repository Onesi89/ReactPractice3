import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Headers from "./component/Header";
import Login from "./component/login";
import { useSelector } from "react-redux";
import SignUp from "./component/signUp/signUp";
import MoneyCharge from "./component/service/MoneyCharge";
import Payment from "./component/service/Payment";
import Transaction from "./component/service/Transaction";
import Test from "./component/test";

const EditMemberInfo = React.lazy(() => import("./component/Member/EditMemberInfo"));
const Main = React.lazy(() => import("./component/Main"));

const App: React.FC = () => {
    let loginCheck = useSelector((state: any) => {
        return state?.value;
    });

    if (!loginCheck?.mnum) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/main/test" element={<Test />}></Route>
                    <Route path="*" element={<div>로그인이 필요한 서비스입니다.</div>} />
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
                            <Suspense fallback={<div>메인 로딩중입니다.</div>}>
                                <Main />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/main/editMemberInfo"
                        element={
                            <Suspense fallback={<div>회원정보 로딩중입니다.</div>}>
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
