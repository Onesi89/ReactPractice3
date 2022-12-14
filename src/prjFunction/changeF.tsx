import React from "react";
import { allCheck, vald } from "../component/signUp/signUp";

/**
 * @typedef {Object} changeFProps
 * @property {React.ChangeEvent} props
 * @property {vald} vald
 * @property {allCheck} allcheck
 * @property {Function} setAllcheck
 */
type changeFProps = {
    props: React.ChangeEvent<HTMLInputElement>;
    vald: vald;
    setVald: Function;
    allcheck: allCheck;
    setAllcheck: Function;
};

/**
 * 회원가입 시 state 저장 함수
 * @param {changeFProps} param0
 */

const changeF = ({ props, vald, setVald, allcheck, setAllcheck }: changeFProps) => {
    const changeF2 = (prevData: any, abc: any) => {
        return { ...prevData, ...abc };
    };

    let change = { ...vald };
    let abc = {};

    switch (props.currentTarget.id) {
        case "id":
            setAllcheck({ ...allcheck, id: false });
            abc = { id: props.target.value };
            change = changeF2(vald, abc);
            break;
        case "pw":
            // setAllcheck({ ...allcheck, pw: false });
            abc = { pw: props.target.value };
            change = changeF2(vald, abc);
            break;
        case "pwCheck":
            // setAllcheck({ ...allcheck, pwCheck: false });
            abc = { pwCheck: props.target.value };
            change = changeF2(vald, abc);
            break;
        case "name":
            // setAllcheck({ ...allcheck, name: false });
            abc = { name: props.target.value };
            change = changeF2(vald, abc);
            break;
        case "phone1":
            setAllcheck({ ...allcheck, phone: false });
            abc = { phone: { ...vald.phone, phone1: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "phone2":
            setAllcheck({ ...allcheck, phone: false });
            abc = { phone: { ...vald.phone, phone2: props.target.value } };
            change = changeF2(vald, abc);

            break;
        case "phone3":
            setAllcheck({ ...allcheck, phone: false });
            abc = { phone: { ...vald.phone, phone3: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "address1":
            setAllcheck({ ...allcheck, phone: false });
            abc = { address: { address1: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "address2":
            setAllcheck({ ...allcheck, phone: false });
            abc = { address: { address2: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "address3":
            abc = { address: { ...vald.address, address3: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "email1":
            abc = { email: { ...vald.email, email1: props.target.value } };
            change = changeF2(vald, abc);
            break;
        case "email2":
            abc = { email: { ...vald.email, email2: props.target.value } };
            change = changeF2(vald, abc);
            break;
    }

    setVald(change);
};

export default changeF;
