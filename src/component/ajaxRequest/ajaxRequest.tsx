import React from "react";
import axios from "axios";

/**
 * custom ajax 요청 페이지입니다.
 * baseURL: "",
 * timeout: 1000,
 * headers: {
 *   "Content-type": "application/json; charset=utf-8",
 * },
 * responseType: json,
 * responseEncoding: utf-8,&nbsp
 */
export const instance = axios.create({
    baseURL: "",
    timeout: 1000,
    headers: {
        "Content-type": "application/json; charset=utf-8",
    },
    responseType: "json",
    responseEncoding: "utf-8",
});
