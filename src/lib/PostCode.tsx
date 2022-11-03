import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Button from "../component/signUp/button";

type PostCodeProps = {
    btnF: Function;
};

/**
 * 다음 우편 외부 API 사용 주소 받아오기
 * @param {PostcodeProps} param0
 * @returns (btnF) => Button JSX 호출
 */
const Postcode = ({ btnF }: PostCodeProps) => {
    const open = useDaumPostcodePopup();

    /**
     * AJAX  성공으로 zonecod, fullAddress 얻음
     * @param {any} data
     * @return (data)=>{btnF()}
     */

    const handleComplete = (data?: any) => {
        let fullAddress: string = data.address;
        let zonecode: string = data.zonecode;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        // zonecode : 우편번호,fullAddress 주소
        btnF(zonecode, fullAddress);
    };

    /**
     * onClick 이벤트. 통신 성공시 우편번호와 도로명 주소를 받아옴
     */
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <Button check={true} text="검색" btnF={handleClick} />;
};

export default Postcode;
