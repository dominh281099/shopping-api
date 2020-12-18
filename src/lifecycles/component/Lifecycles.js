import React from 'react';

class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state = {
            number: 10,
            color: 'red',
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        return null;
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState);
        // if(nextProps.counter !== nextState.counter){
        //     return true;
        // }
        // return false;
        return true; // chay 2 ham ben duoi
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        const newColor = prevState.color !== prevProps.color ? prevProps.color : prevState.color;// tham so thu 3 chinh la gia tri cua snapshot tra ve
        return newColor;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
        document.getElementById('title').style.color = snapshot;
    }

    componentWillUnmount(){
        console.log(`component da bi xoa`)
    }

    render() {
        return(
            <>
            <h2>Number: {this.state.number}</h2>
            <p id="title" style={{color: this.state.color}}>
            This page contains a detailed API
            </p>
            </>
        )
    }
}

export default Lifecycle;
