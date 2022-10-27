import React from "react";
import styles from "../css/headerStyle.module.css";
import { useNavigate } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import store from "../app/reducer";
import { useDispatch } from "react-redux";
import { logout } from "../app/loginSlice";

type LogoutProp = {
    style?: string[];
};

const Logout: React.FC<LogoutProp> = ({ style }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const f = async () => {
        let persistor = persistStore(store);
        await persistor.purge();
        dispatch(logout({}));
        alert("로그아웃이 되었습니다.");
        navigate("/", { replace: true });
    };

    return (
        <span className={styles.headerDivIteams} onClick={f}>
            로그아웃
        </span>
    );
};

export default Logout;
