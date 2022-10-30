import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/headerStyle.module.css";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import Leftnav2 from "./Leftnav2";
import { LinkContainer } from "react-router-bootstrap";

// const leftNavToggle = (toggleValue: any, setToggleValue: any) => {
//     let size = { left: "150px" };

//     if (toggleValue.toggle) {
//         size = { left: "320px" };
//     }

//     let toggleButton = {
//         toggle: !toggleValue.toggle,
//         ...size,
//     };

//     setToggleValue(toggleButton);
// };

const Headers = () => {
    console.log("Header 렌더링 시작");
    const memberInfo = useSelector((state: any) => {
        return state.value;
    });
    // const [toggleValue, setToggleValue] = useState({
    //     toggle: true,
    //     left: "130px",
    // });

    // useEffect(() => {
    //     leftNavToggle(toggleValue, setToggleValue);
    // }, []);

    return (
        <>
            <Navbar style={{ backgroundColor: "rgb(255,64,64)" }} variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src=".././img/logo1.png" width={"100px"}></img>
                        <span className="E4netHeaderSpan">CardSystem</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {/* 내정보 이동하기 */}
                            <LinkContainer to="/">
                                <span className={styles.headerDivIteams}>{memberInfo.memberID}</span>
                            </LinkContainer>
                            <Logout />
                            <LinkContainer to="/main/payment">
                                <span className={styles.headerDivIteams}>도움말</span>
                            </LinkContainer>
                            {/* 톡톡상담 나중에 */}
                            {/* <Tok /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Leftnav2 />

            {/* <Leftnav2 leftNavToggle={() => leftNavToggle(toggleValue, setToggleValue)} /> */}
            {/* <div style={{ position: "absolute", top: "120px", left: toggleValue.left, color: "black" }}>
                <Outlet />
            </div> */}

            {/* 혼자만든 커스텀메뉴
             <div style={{ display: "flex", flexDirection: "column" }}>
                {toggleValue.toggle ? (
                    <LeftNav info={{ ...memberInfo }} leftNavToggle={leftNavToggle} />
                ) : (
                    <div style={{ position: "absolute", zIndex: "5" }}>
                        <button className={styles.toggleButton} onClick={leftNavToggle}>
                            <span style={{ fontSize: "20px" }}>{">>"}</span>
                        </button>
                    </div>
                )}
                <div style={{ position: "fixed", left: toggleValue.left }}>
                    <Outlet />
                </div>
            </div> */}
        </>
    );
};

export default Headers;
