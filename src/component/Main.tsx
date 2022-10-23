import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        <>
            <h2>로딩중입니다.</h2>
        </>;
    }

    return (
        <>
            <h2>안녕하세요</h2>
            <h2>안녕하세요</h2>
            <h2>안녕하세요</h2>
            <h2>안녕하세요</h2>
            <h2>안녕하세요</h2>
            <h2>안녕하세요</h2>
        </>
    );
};

export default Main;
