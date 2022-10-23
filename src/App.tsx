import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Headers from './component/Header';
import Login from './component/login';
import { useSelector } from 'react-redux';
import Main from './component/Main';

const App: React.FC = () => {
    let loginCheck = useSelector((state: any) => {
        return state.value;
    });

    if (!loginCheck?.mnum) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
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
                    <Route path=":id" element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
