import React, { useEffect, useRef } from "react";

/**
 *
 * @param {Function} ff useEffect 에서 사용할 함수
 * @param {string} superName 해당 ref의 상위 tag 이름 지정
 * @returns (ff: Function, superName: string) => ref // useRef
 */
const useCustomRef = (ff: Function, superName: string) => {
    const ref = useRef<any>(null);

    useEffect(() => {
        /** useRef에 등록된 타켓이 클릭 안될 경우 ff 함수 실행
         * @param event 클릭 이벤트에 해당 되는 타겟
         */
        function handleClickOutside(event: any) {
            if (
                ref.current &&
                !ref.current?.contains(event.target) &&
                (event.target as Element).className !== superName
            ) {
                ff();
            }
        }
        //click 이벤트 추가
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return ref;
};

export default useCustomRef;
