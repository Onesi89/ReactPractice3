import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Button from "../component/signUp/button";

const Postcode = () => {
    const open = useDaumPostcodePopup();

    const handleComplete = (data?: any) => {
        let fullAddress = data.address;
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
        console.log(data.zonecode);
        console.log(data.roadAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return <Button check={true} text="검색" btnF={handleClick} />;
};

export default Postcode;
