import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../css/headerStyle.module.css';
import Logout from './Logout';
import MyInfoAccess from './MyInfoAccess';
import Tok from './Tok';
import LeftNav from './LeftNav';
import { useSelector } from 'react-redux';

const Headers = () => {
    const memberInfo = useSelector((state: any) => {
        return state.value;
    });
    const [toggleValue, setToggleValue] = useState({
        toggle: true,
        left: '14rem',
    });
    const leftNavToggle = () => {
        let size = { left: '14rem' };

        if (toggleValue.toggle) {
            size = { left: '3rem' };
        }

        let toggleButton = {
            toggle: !toggleValue.toggle,
            ...size,
        };

        setToggleValue(toggleButton);
    };

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
                        {
                            <Link to={'/main/' + memberInfo.mnum} className={styles.headerLink}>
                                <h3>{memberInfo.nickname}</h3>
                            </Link>
                        }
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
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {toggleValue.toggle ? (
                    <LeftNav info={{ ...memberInfo }} leftNavToggle={leftNavToggle} />
                ) : (
                    <div style={{ position: 'absolute', zIndex: '5' }}>
                        <button className={styles.toggleButton} onClick={leftNavToggle}>
                            <span style={{ fontSize: '20px' }}>{'>>'}</span>
                        </button>
                    </div>
                )}
                <div style={{ position: 'fixed', left: toggleValue.left }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Headers;
