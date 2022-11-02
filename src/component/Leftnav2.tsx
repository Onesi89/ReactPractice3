import React, { Suspense, useCallback, useState } from "react";

//import react pro sidebar components
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

//import icons from react icons
import { FiEdit, FiHome, FiStar } from "react-icons/fi";
import { FaHistory, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrMoney, GrUser, GrTransaction } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import styles from "../css/leftnav2.module.css";
import { Link, Outlet } from "react-router-dom";

const Leftnav2 = () => {
    console.log("Leftnav2 로딩 시작");

    // 사용안함 const { collapsed, collapseSidebar } = useProSidebar();
    const [collapsed, setCollapsed] = useState(false);

    const [toggleValue, setToggleValue] = useState({
        toggle: true,
        left: "320px",
    });

    const leftNavToggle = useCallback((collapsed: boolean, setToggleValue: any) => {
        console.log("Leftnav2 useCallback 시작");
        let size = { left: "320px" };

        if (!collapsed) {
            size = { left: "150px" };
        } else {
            size = { left: "320px" };
        }

        let toggleButton = {
            toggle: !collapsed,
            ...size,
        };

        setToggleValue(toggleButton);
    }, []);

    return (
        <>
            <div className={styles.leftnav2Container}>
                <Sidebar defaultCollapsed={collapsed}>
                    <Menu>
                        <SubMenu className={styles.leftnav2SuperMenu} icon={<FiStar />} label="바로가기">
                            <MenuItem
                                className={styles.leftnav2Menu}
                                icon={<FiHome />}
                                routerLink={<Link to="/main/member" />}
                            >
                                홈
                            </MenuItem>
                        </SubMenu>
                        <SubMenu className={styles.leftnav2SuperMenu} icon={<GrUser />} label="회원정보">
                            <MenuItem
                                className={styles.leftnav2Menu}
                                icon={<FiEdit />}
                                routerLink={<Link to="/main/editMemberInfo" />}
                            >
                                정보변경
                            </MenuItem>
                        </SubMenu>
                        <SubMenu className={styles.leftnav2SuperMenu} icon={<GrTransaction />} label="서비스">
                            <MenuItem
                                className={styles.leftnav2Menu}
                                icon={<GrMoney />}
                                routerLink={<Link to="/main/moneyCharge" />}
                            >
                                머니충전
                            </MenuItem>

                            <MenuItem
                                className={styles.leftnav2Menu}
                                icon={<MdPayment />}
                                routerLink={<Link to="/main/payment" />}
                            >
                                머니결제
                            </MenuItem>
                            <MenuItem
                                className={styles.leftnav2Menu}
                                icon={<FaHistory />}
                                routerLink={<Link to="/main/transation" />}
                            >
                                거래내역
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
                <main>
                    <button
                        onClick={() => {
                            leftNavToggle(collapsed, setToggleValue);
                            setCollapsed(!collapsed);
                        }}
                    >
                        {!collapsed ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </main>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    left: toggleValue.left,
                    color: "black",
                    width: "83vw",
                    height: "100%",
                }}
            >
                <Outlet />
            </div>
        </>
    );
};

export default Leftnav2;
