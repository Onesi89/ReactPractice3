import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHistory } from "react-icons/fa";
import { FiStar, FiHome, FiEdit } from "react-icons/fi";
import { GrUser, GrTransaction, GrMoney } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Test = () => {
    console.log(1);

    // const { collapsed, collapseSidebar } = useProSidebar(a);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div style={{ display: "flex", height: "100%" }}>
                <Sidebar>
                    <Menu>
                        <MenuItem> Documentation</MenuItem>
                        <MenuItem> Calendar</MenuItem>
                        <MenuItem> E-commerce</MenuItem>
                    </Menu>
                </Sidebar>
                <main>
                    <button onClick={() => setCollapsed(!false)}>Collapse</button>
                </main>
            </div>
            {/* {!collapsed ? <FaArrowLeft /> : <FaArrowRight />} */}
        </>
    );
};

export default Test;
