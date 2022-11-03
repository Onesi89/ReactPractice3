import React, { useEffect, useState } from "react";
import styles from "../css/headerStyle.module.css";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import Leftnav2 from "./Leftnav2";
import { LinkContainer } from "react-router-bootstrap";

/**
 * 사이드바 토글 on/off
 * @param toggleValue [toggleProps]
 * @param setToggleValue [Fuction]
 * @return ToggleValue state Update
 */
const leftNavToggle = (toggleValue: toggleProps, setToggleValue: Function) => {
    let size = { left: "150px" };

    if (toggleValue.toggle) {
        size = { left: "320px" };
    }

    let toggleButton = {
        toggle: !toggleValue.toggle,
        ...size,
    };

    setToggleValue(toggleButton);
};

/**
 * @typedef {Object} toggleProps
 * @property {boolean} toggle sidebar toggle 사용여부
 * @property {string} left sidbar 숨겨졌을 때 <Outlet/> 과의 마진>
 */
type toggleProps = {
    toggle: boolean;
    left: string;
};

/**
 * @details Header JSX , 안에 사이드바인 LeftNav2 JAX 있음.
 * 토글로 사이드바 숨기기 가능
 */
const Headers = () => {
    console.log("Header 렌더링 시작");
    const memberInfo = useSelector((state: any) => {
        return state?.value;
    });
    const [toggleValue, setToggleValue] = useState<toggleProps>({
        toggle: true,
        left: "130px",
    });

    /** 첫 렌더링 후 leftNavToggle 한번 초기화*/
    useEffect(() => {
        leftNavToggle(toggleValue, setToggleValue);
    }, []);

    return (
        <>
            <Navbar className={styles.headerDivContainer} variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src=".././img/logo1.png" width={"100px"}></img>
                        <span className="E4netHeaderSpan">CardSystem</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <LinkContainer to="/">
                                <span className={styles.headerDivIteams}>{memberInfo.memberID}</span>
                            </LinkContainer>
                            <Logout
                                props={{
                                    alert: "로그아웃이 되었습니다.",
                                    text: "로그아웃",
                                    navigateString: "/",
                                    replace: true,
                                }}
                            />
                            <LinkContainer to="/main/payment">
                                <span className={styles.headerDivIteams}>도움말</span>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Leftnav2 />
        </>
    );
};

export default Headers;
