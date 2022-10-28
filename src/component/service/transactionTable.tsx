import React from "react";

type TransactionTableProps = {
    header: string[];
    data: string[];
};
const cdbreact = require("cdbreact");

const TransactionTable: React.FC<TransactionTableProps> = ({ header, data }) => {
    const { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } = cdbreact;
    return (
        <CDBContainer>
            <CDBTable striped hover responsiveMd className="transcactionTbale">
                <CDBTableHeader>
                    <tr>
                        {header.map((h, idx) => (
                            <th key={idx}>{h}</th>
                        ))}
                    </tr>
                </CDBTableHeader>
                <CDBTableBody>
                    <tr>
                        {data.map((d, idx) => (
                            <th key={idx}>{d}</th>
                        ))}
                    </tr>
                </CDBTableBody>
            </CDBTable>
        </CDBContainer>
    );
};

export default TransactionTable;
