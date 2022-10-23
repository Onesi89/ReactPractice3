import React from 'react';
import styles from '../css/headerStyle.module.css';

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
