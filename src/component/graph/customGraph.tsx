import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BarDatum } from "@nivo/bar";

/**
 *
 * @param {BarDatum[]} dataList 데이타리스트
 * @param {string[]} setKeyList 키에 사용할 리스트
 * @param {string} setIndexBy 인덱스리스트
 */
const ff = (dataList: BarDatum[], setKeyList: Function, setIndexBy: Function) => {
    dataList.map((d: object, idx: number) => {
        if (idx === 0) {
            const [a, ...b] = Object.keys(d);
            setIndexBy(a);
            setKeyList([...b]);
            return;
        }
    });
};

/**
 * @param {object[]} dataList object 배열, 객체의 구조가 같아야 함
 * @returns (dataList)=> Graph
 */
const CustomGraph = (dataList?: any) => {
    const [keylist, setKeyList] = useState([]);
    const [indexBy, setIndexBy] = useState("");

    //추후 지울 예정 - useEffect 전까지
    const data: BarDatum[] = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
    ];
    dataList = data;

    useEffect(() => {
        ff(dataList, setKeyList, setIndexBy);
    }, []);

    return (
        <ResponsiveBar
            data={data}
            keys={keylist}
            indexBy={indexBy}
            margin={{ top: 30, right: 50, bottom: 85, left: 60 }}
            padding={0.3}
            colors={["rgb(255,150,150)"]}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
        />
    );
};

export default CustomGraph;
