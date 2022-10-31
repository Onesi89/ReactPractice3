import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Button from "../component/signUp/button";

type PostCodeProps = {
    btnF: Function;
};

const Postcode = ({ btnF }: PostCodeProps) => {
    const open = useDaumPostcodePopup();

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

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <Button check={true} text="검색" btnF={handleClick} />;
};

export default Postcode;
