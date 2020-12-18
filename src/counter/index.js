import React from 'react';
import Button from './component/Button.js';
import Result from './component/Result.js';

class Counter extends React.Component {
    constructor() {
        super();
        // khai bao state
        this.state = {
            count: 0
        }

        // tuong duong this.age = 10. o day la object
        this.incementCounter = this.incementCounter.bind(this);
        this.discementCounter = this.decementCounter.bind(this);
    }
    incementCounter(){
        // hanh dong cho su kien click vao button '+'
        // nhiem vu: cap nhap va thay doi cai state count - khi state count thau doi se keo theo viec render lai giao dien
        this.setState({
            // object nay chinh la cai state o tren
            // chung ta cap nhap state
            count: this.state.count + 1}, () => {
                // hanh dong de xu ly cho viec sau khi state dc cap nhap xong
                console.log('da thay doi state');

        });

        // this.setState(); chi su dung trong class component (logic: cap nhap xu ly state ,callbackFunction: chay khi state dc thuc hien xong(ko bat buoc) )

    }
    // decementCounter(){
    //     this.setState({count: this.state.count -1}, () =>{
    //         console.log('da thay doi state');
    //     });
    decementCounter = ()=>{
        this.setState(state => {
            // this.state.count: la cai state ban dau dc tao ra
            // state: la state hien tai dang dc cap nhap - xu l
            return {count: this.state.count -1}
            // this.state:  , state: lay ra dc ngay khi thay doi ko can render
        });
    }

    viewDecrement = ()=>{
        this.decementCounter();
        this.decementCounter();
        this.decementCounter();
        console.log(this.state.count);
        
    }
    render() {
        return (
            <>
            <Result count={this.state.count}/>
            <Button type="button" click = {this.incementCounter}> + </Button>
            <Button type = "button" click = {this.viewDecrement}> - </Button>
            </>
        );
    }
}



export default Counter;