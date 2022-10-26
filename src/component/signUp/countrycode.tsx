import React, { useState, useEffect, useCallback } from "react";
import styles from "../../css/countrycode.module.css";
import useCustomRef from "../../lib/useCustomRef";

// const Countrycode = () => {
//     return (
//         <select className={styles.countrycodeContainer}>
//             <option value="">대한민국(+82)</option>
//             <option value="">미국(+1)</option>
//         </select>
//     );
// };

const Countrycode = () => {
    const [open, isOpen] = useState(true);
    const [ro, setRo] = useState("rotate(0deg)");
    const [code, setCode] = useState("대한민국(+82)");

    const codeList: string[] = ["대한민국(+82)", "미국(+1)", "중국(+86)", "일본(+81)"];

    const openList = () => {
        if (!open) {
            setRo("rotate(180deg)");
        } else {
            setRo("rotate(0deg)");
        }
        isOpen(!open);
    };

    const outsideRef = useCustomRef(openList);

    const selectCode = (data: string) => {
        setCode(data);
        setRo("rotate(0deg)");
    };

    // function abc(event: MouseEvent) {
    //     event.preventDefault();
    //     let elname = (event.target as Element).classList;

    //     if (elname[0] === "nno") {
    //     } else {
    //         isOpen(false);
    //     }
    // }

    useEffect(() => {
        openList();
    }, [code]);

    return (
        <div className={styles.countrycodeContainer}>
            <div>
                <a
                    href="#"
                    role="button"
                    onClick={() => {
                        openList();
                    }}
                    className="nno"
                >
                    <span style={{ display: "inline-block" }} className="nno">
                        {code}
                    </span>
                    <img
                        style={{ display: "inline-block", transform: ro }}
                        src="https://accounts.commerce.naver.com/static/media/icon-fold-16.f93fa38d.svg"
                        alt=" "
                    ></img>
                </a>
                {open && (
                    <div className={[styles.countrycodeListDiv, "nno"].join(" ")} ref={outsideRef}>
                        <ul role="listbox" className="nno">
                            {codeList.map((data, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        role={"presentation"}
                                        onClick={(e) => {
                                            selectCode(data);
                                            isOpen(!false);
                                        }}
                                        className="nno"
                                    >
                                        <a href="#" role="option" className="nno">
                                            <span className="nno">{data}</span>
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
};

export default Countrycode;
