import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

/**
 * Redux-toolkit loginSlice
 */
const loginSlice = createSlice({
    name: "login",
    initialState: {},
    reducers: {
        /**
         * @param {Object} state 회원 정보 state
         * @param {Function} action 회원 정보 update 함수
         */
        update: (state: any, action: any) => {
            state.value = { ...state.value, ...action.payload };
        },

        /**
         * @param {Object} state 회원 정보 state
         * @param {Function} action 회원 정보 logout 함수
         */
        logout: (state: any, action: any) => {
            state.value = { ...action.payload };
        },
    },

    /**
     * 세션 스토리지에서 정보 삭제
     * @param builder
     */
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {});
    },
});

export default loginSlice;
export const { update } = loginSlice.actions;
export const { logout } = loginSlice.actions;
