import React from 'react';
import Lifecycle from './component/Lifecycles.js'
class Index extends React.Component {
    // 1--Giai doan mouting
    constructor(){
        super();
        //a--khoi tao state
        this.state = {
            count: 0,
            show: true
        }
        //b-- truyen con tro this cho phuong thuc
        console.log(`constructor of Index component`);
    }

    static getDerivedStateFromProps(props, state) {
        // Thay doi state ban dau bang props truyen vao cho component
        console.log(`getDerivedStateFromProps of Index component`);
        // if(props.count !== state.number){
        //     return{number: props.counter}
        // }
        return null;
    }

    componentDidMount(){
        // Khi Dom giao dien da dc dung xong
        // thong thuong hay call data - api vao day
        // chay duy nhat 1 lan trong vong doi cua component
        console.log(`componentDidMount of Index component`);
    }


    changeCouter = () => {
        this.setState({...this.state, count:this.state.count + 1});
    }
    showAndHide = () => {
        this.setState({...this.state, show: !this.state.show})
    }
    render() {
        console.log(`component da duoc render`)
        return (
            <>
                <h1>This App Index</h1>
                <br/>
                <br/>
                <button onClick={this.changeCouter}>Click me</button>
                {this.state.show ?(<Lifecycle color="yellow" counter={this.state.count}/>) : null}

                <button onClick = {this.showAndHide}>  show/hide Lifecycle</button>
            </>
            
        )
    }
}

export default Index;