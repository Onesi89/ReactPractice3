import React, { Key, useEffect } from "react";
import ErrmsgTable from "./errmsgTable";

type ErrmsgProps = {
    msg: string[];
    pattern: RegExp;
    word: string;
    buttonAble: Function;
    keyss: string;
};

type userType = {
    [keys: string]: boolean;
};

const Errmsg = ({ msg, pattern, word, buttonAble, keyss }: ErrmsgProps) => {
    useEffect(() => {
        let objectT: userType = {
            [keyss]: false,
        };

        if (keyss !== "" && !pattern.test(word)) {
            buttonAble({ ...objectT });
        } else {
            objectT = {
                [keyss]: true,
            };
            buttonAble({ ...objectT });
        }
    }, [word]);

    if (word.length == 0) {
        return <ErrmsgTable msgProp={msg[0]} />;
    }

    if (!pattern.test(word)) {
        return <ErrmsgTable msgProp={msg[1]} />;
    } else {
        return <></>;
    }
};

export default Errmsg;
