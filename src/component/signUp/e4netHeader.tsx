import React from "react";
import { Link } from "react-router-dom";
import "../../css/e4netHeader.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const E4netHeader = () => {
    return (
        <Navbar style={{ backgroundColor: "rgb(255,64,64)", marginBottom: "50px" }} variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src="./img/logo1.png" width={"100px"}></img>
                    <span className="E4netHeaderSpan">CardSystem</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">
                            <span className="E4netHeaderNavSpan">홈페이지</span>
                        </Nav.Link>
                        <Nav.Link href="">
                            <span className="E4netHeaderNavSpan">오시는길</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default E4netHeader;
