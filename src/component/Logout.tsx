import React, { CSSProperties } from "react";
import styles from "../css/headerStyle.module.css";
import { useNavigate } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import store from "../app/reducer";
import { useDispatch } from "react-redux";
import { logout } from "../app/loginSlice";

/**
 * @typedef {object} text
 * @property {string} text
 * @property {string} alert
 * @property {string} navigateString
 * @property {boolean} replace
 */
type text = {
    text: string;
    alert: string;
    navigateString: string;
    replace: boolean;
};

/**
 * @typedef {Object} RedirectProp
 * @property {text} props
 * @property {CSSProperties} style
 */
type RedirectProp = {
    props?: text;
    style?: CSSProperties;
};

export type { RedirectProp };

/**
 * 리다이렉트 필요한 경우 사용됨.
 * redux 저장소 삭제
 */
const Logout: React.FC<RedirectProp> = ({ style, props }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const f = async () => {
        let persistor = persistStore(store);
        await persistor.purge();
        dispatch(logout({}));
        alert(props?.alert);
        navigate(props ? props.navigateString : "/", { replace: props?.replace });
    };

    return (
        <span className={styles.headerDivIteams} onClick={f} style={{ ...style }}>
            {props?.text}
        </span>
    );
};

export default Logout;
