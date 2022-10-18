import React from 'react';

type elementSizeProps = {
    w: number;
    h: number;
};
const elementSize = ({ w, h }: elementSizeProps) => {
    let width: number = window.innerWidth;
    let height: number = window.innerHeight;

    let ewid: string = width + 'px';
    let ehei: string = height + 'px';

    let array: string[] = [ewid, ehei];

    return array;
};

export default elementSize;
