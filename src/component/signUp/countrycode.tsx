import React, { useState, useEffect } from "react";
import styles from "../../css/countrycode.module.css";
import useCustomRef from "../../lib/useCustomRef";
import ShowInput from "../../prjFunction/showInput";

type CustomSelectBoxProps = {
    dataList?: string[];
    width?: string;
    height?: string;
    superName?: string;
    boxF?: Function;
};

export type { CustomSelectBoxProps };

function CustomSelectBox({
    dataList = ["010", "011", "070"],
    width = "80px",
    height = "100%",
    superName = "none",
    boxF,
}: CustomSelectBoxProps) {
    const [open, isOpen] = useState(true);
    const [ro, setRo] = useState("rotate(0deg)");
    const [code, setCode] = useState(dataList[0]);

    const openList = () => {
        if (!open) {
            setRo("rotate(180deg)");
        } else {
            setRo("rotate(0deg)");
        }
        isOpen(!open);
    };

    const outsideRef = useCustomRef(openList, superName);

    const selectCode = (data: string) => {
        setCode(data);
        setRo("rotate(0deg)");
    };

    useEffect(() => {
        openList();
    }, []);

    return (
        <div className={styles.countrycodeContainer} style={{ width }}>
            <div>
                <a
                    role="button"
                    onClick={() => {
                        openList();
                    }}
                    className={superName}
                >
                    <span style={{ display: "inline-block", paddingLeft: "3px" }} className={superName}>
                        {code}
                    </span>
                    <img
                        style={{ display: "inline-block", transform: ro, zIndex: -1 }}
                        src="https://accounts.commerce.naver.com/static/media/icon-fold-16.f93fa38d.svg"
                        alt=" "
                    ></img>
                </a>
                {open && (
                    <div className={[styles.countrycodeListDiv, { superName }].join(" ")} ref={outsideRef}>
                        <ul
                            role="listbox"
                            className={superName}
                            style={{ width: "100%", cursor: "pointer", height: height, overflow: "hidden" }}
                        >
                            {dataList.map((data, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        role={"presentation"}
                                        onClick={(e: React.MouseEvent) => {
                                            selectCode(data);
                                            isOpen(false);
                                            if (boxF !== undefined) {
                                                boxF(e);
                                            }
                                            return;
                                        }}
                                        className={superName}
                                    >
                                        <a
                                            role="option"
                                            className={superName}
                                            style={{ display: "inline-block", width: "100%" }}
                                        >
                                            <span style={{ display: "inline-block", width: "100%" }}>{data}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomSelectBox;
