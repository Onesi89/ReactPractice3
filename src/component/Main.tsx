import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Outlet />
            <body>
                <div>안녕하세요</div>
            </body>
        </>
    );
};

export default Main;
