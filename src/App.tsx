import React from 'react';
// import { Counter } from "./features/counter/Counter";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Headers from './component/Header';
import Main from './component/Main';
import Login from './component/login';
import { Provider } from 'react-redux';
// import store from './app/store1';
import store from './app/reducer';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const App: React.FC = () => {
    //persistStore(store[config,callback]) : 새로고침해도 지속될 store 생성 persistor 오브젝트 반환, config의 지속성 해제 조건 지정 가능
    let persistor = persistStore(store);
    return (
        <Provider store={store}>
            {/* PersisGate 상태가 저장될 때 까지 앱 UI랜더링 지연됨. loading은 로딩중일 떄 확인*/}
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                    </Routes>
                    <Routes>
                        <Route path="/main" element={<Headers />}>
                            <Route path=":id" element={<Main />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;
