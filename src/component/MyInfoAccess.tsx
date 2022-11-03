import React from "react";
import styles from "../css/headerStyle.module.css";
/**
 * Header.tsx에 계정이름을 입력합니다.
 * @param MyInfoAccessProps
 * @returns memberID
 */

type MyInfoAccessProps = {
    memberID: string;
};

const MyInfoAccess: React.FC<MyInfoAccessProps> = ({ memberID }) => {
    return (
        <li className={styles.li}>
            <h5>{memberID}</h5>
        </li>
    );
};

export default MyInfoAccess;
