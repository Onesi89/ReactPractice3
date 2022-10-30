import React, { useEffect, useMemo } from "react";
import ErrmsgTable from "./errmsgTable";
import { allCheck } from "./signUp";

type ErrmsgProps = {
    msg: string[];
    pattern: RegExp;
    word: string;
    buttonAble: Function;
    keyss: string;
    checkF?: Function;
    allCheck?: allCheck;
};

type userType = {
    [keys: string]: boolean;
};

const Errmsg = ({ msg, pattern, word, buttonAble, keyss, checkF }: ErrmsgProps) => {
    useEffect(() => {
        let objectT: userType = {
            [keyss]: false,
        };
        pattern.test(word);
        // keyss가 "" 아니면서 pattern 이 잘못되었을 때

        if (keyss !== "" && !pattern.test(word)) {
            buttonAble({ ...objectT });
            if (checkF !== undefined) {
                checkF(false);
            }
        } else {
            objectT = {
                [keyss]: true,
            };
            buttonAble({ ...objectT });
            if (checkF !== undefined) {
                checkF(true);
            }
        }
    }, [word]);

    if (word.length == 0) {
        return <ErrmsgTable msgProp={msg[0]} />;
    } else if (!pattern.test(word)) {
        return <ErrmsgTable msgProp={msg[1]} />;
    } else {
        return <></>;
    }
};

export default Errmsg;
