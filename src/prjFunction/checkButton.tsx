import React from "react";
import { allCheck, vald } from "../component/signUp/signUp";

// const checkTrueFalse = ({...vald}:vald)=> {
//     if (vald.pw !== vald.pwCheck){
//         return false
//     }

// }

// export {checkTrueFalse};

export const checkButton = ({ ...allcheck }: allCheck) => {
    if (!allcheck.id) {
        return alert("아이디 중복검사를 다시 해주세요.");
    } else if (!(allcheck.pw && allcheck.pwCheck)) {
        return alert("비밀번호를 확인 해주세요.");
    } else if (!allcheck.name) {
        return alert("이름을 확인 해주세요.");
    } else if (!allcheck.phone) {
        return alert("전화번호를 확인 해주세요.");
    } else if (!(allcheck.addressNumber && allcheck.address)) {
        return alert("주소를 확인 해주세요.");
    } else if (!allcheck.email) {
        return alert("이메일을 확인 해주세요");
    }
};
