import React from "react";
import styles from "../../css/table.module.css";

type TransactionTableProps = {
    header: string[];
    data: string[][];
    tableClassName?: string;
};
const cdbreact = require("cdbreact");

const TransactionTable: React.FC<TransactionTableProps> = ({ header, data, tableClassName }) => {
    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact;
    return (
        <CDBContainer>
            <CDBTable striped hover responsiveMd className={tableClassName}>
                <CDBTableHeader>
                    <tr>
                        {header.map((h, idx) => (
                            <th key={idx}>{h}</th>
                        ))}
                    </tr>
                </CDBTableHeader>
                <CDBTableBody>
                    {data.map((list, listidx) => (
                        <tr key={listidx}>
                            {list.map((d, idx) => (
                                <td key={idx}>{d}</td>
                            ))}
                        </tr>
                    ))}
                </CDBTableBody>
            </CDBTable>
        </CDBContainer>
    );
};

export default TransactionTable;
