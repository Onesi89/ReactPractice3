import React from "react";

const TopBanner = (props: any) => {
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
            {...props}
        ></div>
    );
};

export default TopBanner;
