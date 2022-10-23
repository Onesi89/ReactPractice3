import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const loginSlice = createSlice({
    name: 'login',
    initialState: {},
    reducers: {
        update: (state: any, action: any) => {
            state.value = { ...state.value, ...action.payload };
        },
        logout: (state: any, action: any) => {
            state.value = { ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => {});
    },
});

export default loginSlice;
export const { update } = loginSlice.actions;
export const { logout } = loginSlice.actions;
