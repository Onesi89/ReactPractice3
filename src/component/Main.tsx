import React, { useEffect, useState } from "react";

const Main = () => {
    const [loading, setLoading] = useState(true);
    console.log("Main 컴포넌트 로딩 시작");

    useEffect(() => {
        console.log("Main 컴포넌트 로딩 끝");
        setLoading(false);
        console.log("Main 컴포넌트 useEffect 끝");
    }, []);

    if (loading) {
        return (
            <>
                <h2>로딩중입니다.</h2>
            </>
        );
    }
    return (
        <>
            <h2>집계 그래프 </h2>
        </>
    );
};

export default Main;
