import React from 'react';

// su dung function component 
// su dung ham de tao 1 component chu ko su dung class 

const Button = (props) => {
    //props: 1 bien dai dien cho tat ca cac thuoc tinh truyen vao component sau nay: thong thuong no la object
    // trong nay khong ton tai phuong thuc render
    //Button la Jsx sau nay compie ra HTML
    return (
        <>
        
        <button 
        onClick={props.click}
        type={props.type}
        >{props.children}</button>
        </>
    );
    // ban chat function component se tu dong nhan tat ca cac props.
    }


export default Button;