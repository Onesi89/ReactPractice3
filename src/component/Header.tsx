import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/headerStyle.module.css';
import Logout from './Logout';
import MyInfoAccess from './MyInfoAccess';
import Tok from './Tok';
import LeftNav from './LeftNav';
import { useSelector } from 'react-redux';

const Headers = () => {
    const memberInfo = useSelector((state: any) => {
        console.log(state);
        return state.value;
    });
    return (
        <>
            <nav>
                <div className={styles.headerDivContainer}>
                    <div className={styles.headerDivIteams}>
                        <img
                            src="../img/headerIcon.png"
                            alt="그림입니다."
                            width={'30px'}
                            className={styles.headerIcon}
                        />
                        <Link to={'/main'} className={styles.headerLink}>
                            <h3>{memberInfo.nickname}</h3>
                        </Link>
                    </div>
                    <div className={styles.headerDivIteams}>
                        <ul className={styles.headerRightUl}>
                            <MyInfoAccess memberID={memberInfo.memberID} />
                            <Logout />
                            <li>
                                <h5 className={styles.headerSpace}>도움말</h5>
                            </li>
                            <Tok />
                        </ul>
                    </div>
                </div>
            </nav>
            <LeftNav info={{ ...memberInfo }} />
        </>
    );
};

export default Headers;
