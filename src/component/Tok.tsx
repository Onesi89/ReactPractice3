import React from 'react';
import styles from '../css/headerStyle.module.css';

const Tok = () => {
    return (
        <li className={styles.li}>
            <button className={styles.headerButton} type="button">
                톡톡상담
            </button>
        </li>
    );
};

export default Tok;
