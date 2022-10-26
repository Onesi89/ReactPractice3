import React from "react";
import Google from "./google";

export type ListProps = {
    navigate: any;
    dispatch: any;
};

const List = ({ navigate, dispatch }: ListProps) => {
    return (
        <>
            <ul>
                <Google navigate={navigate} dispatch={dispatch} />
                {/* <li>카카오톡</li>
                <li>네이버</li>
                <li>공동인증서</li> */}
            </ul>
        </>
    );
};

export default List;
