import React from "react";

type errmsgTableProps = {
    msgProp: string;
};

const ErrmsgTable = ({ msgProp }: errmsgTableProps) => {
    return (
        <tr>
            <td colSpan={3} style={{ color: "red" }}>
                {msgProp}
            </td>
        </tr>
    );
};

export default ErrmsgTable;
