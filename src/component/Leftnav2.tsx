import React, { useEffect } from "react";

//import react pro sidebar components
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";

//import icons from react icons
import { FiEdit, FiArrowLeftCircle, FiArrowRightCircle, FiHome, FiStar } from "react-icons/fi";
import { FaHistory, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrMoney, GrUser, GrTransaction } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import styles from "../css/leftnav2.module.css";
import { Link } from "react-router-dom";

const Leftnav2 = ({ leftNavToggle }: any) => {
    const { collapsed, collapseSidebar } = useProSidebar();

    useEffect(() => {
        console.log("사이드바 메뉴 토글 감지");
        leftNavToggle();
    }, [collapsed]);

    return (
        <div className={styles.leftnav2Container}>
            <Sidebar>
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
                <button onClick={() => collapseSidebar()}>{!collapsed ? <FaArrowLeft /> : <FaArrowRight />}</button>
            </main>
        </div>
    );
};

export default Leftnav2;
