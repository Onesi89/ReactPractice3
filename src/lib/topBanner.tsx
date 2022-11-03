import React from "react";

type TopBannerProps = {
    children: React.ReactNode;
};

/**
 * @param children JSX
 * @returns Top 배너 / 계층형 메뉴 출력
 */
const TopBanner: React.FC<TopBannerProps> = (children) => {
    return (
        <div
            style={{
                marginTop: "-14px",
                background: "linear-gradient(to right, rgb(230,230,230), rgb(255,255,255))",
                width: "80vw",
                minWidth: "30vw",
                paddingLeft: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 3px",
            }}
            {...children}
        ></div>
    );
};

export default TopBanner;
