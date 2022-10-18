import React from 'react';
import axios from 'axios';

export const instance = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    },
    responseType: 'json',
    responseEncoding: 'utf-8',
});
