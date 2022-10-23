import React from 'react';
import styles from '../css/headerStyle.module.css';
import { useNavigate } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import store from '../app/reducer';
import { useDispatch } from 'react-redux';
import { logout } from '../app/loginSlice';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const f = async () => {
        let persistor = persistStore(store);
        await persistor.purge();
        dispatch(logout({}));
        alert('로그아웃이 되었습니다.');
        navigate('/', { replace: true });
    };

    return (
        <li className={styles.li}>
            <h5 onClick={f}>로그아웃</h5>
        </li>
    );
};

export default Logout;
