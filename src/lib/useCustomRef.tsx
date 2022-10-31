import React, { useEffect, useRef } from "react";

const useCustomRef = (ff: any, superName: string) => {
    const ref = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            //상위 컴포넌트를 외부 클릭으로 인식되지 않기 위해 nno 사용
            if (
                ref.current &&
                !ref.current?.contains(event.target) &&
                (event.target as Element).className !== superName
            ) {
                ff();
            }
        }
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });

    return ref;
};

export default useCustomRef;
