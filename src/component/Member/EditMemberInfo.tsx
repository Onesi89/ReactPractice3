import React from "react";
import { FiEdit } from "react-icons/fi";
import { GrTransaction, GrUser } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import TopBanner from "../../lib/topBanner";
import SignUp from "../signUp/signUp";
import styles from "../../css/memberInfo.module.css";

const EditMemberInfo = () => {
    return (
        <>
            <TopBanner>
                <GrUser />
                &nbsp;회원정보 {">"} 정보변경
            </TopBanner>
            <article className={styles.EditMemberInfoContainer}>
                <header>
                    <FiEdit />
                    <span>&nbsp;&nbsp;회원 정보</span>
                </header>
                <SignUp />
            </article>
        </>
    );
};
export default EditMemberInfo;
