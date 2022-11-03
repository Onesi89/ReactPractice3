import React from "react";

/**
 * 콤마 삽입 함수
 * @param {string}str
 * @details 문자 입력 방지 및 1000단위 콤마 삽입
 * @return ("2000") => 2,000
 */
const inputPriceFormat = (str: string) => {
    /**
     *
     * @param {string} str
     * @return ("2000") => 2,000
     * @details 정규 표현식 [(\d)=숫자] [((?=(?:\d{3})+(?!\d)))=연속된 숫자 3개 그리고 그 뒤에 숫자가 있는 경우] ["$1,"= 매칭되는 값을 콤마로 포함하여 출력]
     */
    const comma = (str: string) => {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };

    /**
     *
     * @param {string} str
     * @returns ("qwe23") => {"23"}
     * @details 문자열에 문자 제거
     */
    const uncomma = (str: string) => {
        str = String(str);
        return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
};

export default inputPriceFormat;
