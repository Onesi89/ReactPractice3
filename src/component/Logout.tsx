import React from 'react';
import styles from '../css/headerStyle.module.css';
import { useNavigate } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import store from '../app/reducer';

const Logout = () => {
    let navigator = useNavigate();
    const f = async () => {
        let persistor = persistStore(store);
        await persistor.purge();
        alert('로그아웃이 되었습니다.');
        navigator('/');
    };

    return (
        <li className={styles.li}>
            <h5 onClick={f}>로그아웃</h5>
        </li>
    );
};

export default Logout;
