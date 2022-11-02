import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const CustomGraph = () => {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
    ];

    return (
        <ResponsiveBar
            data={data}
            keys={["earnings"]}
            indexBy="quarter"
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
