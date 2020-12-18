import React from 'react';
import Button from './component/ButtonComponent.js';
import Header from './component/HeaderComponent';
import Footer from './component/FooterComponent';

// tao ra 1 component
// su dung class component

class Maths extends React.Component {
    constructor(props) {
        super(props);
        this.BamThiBam = this.BamThiBamKhongBamThiBam.bind(this);

    }

    // viet 1 ham xu ly event
    clickButton = () => {
        alert('Hí anh em');
    }

    BamThiBamKhongBamThiBam (){
        // alert('Chu thich anh chieu');
        this.clickButton();
    }
    // hien thi data
    render() {
        // tra ve ma JSX
        return (
            <React.Fragment> 
            <Header />
            <Button btnClick={this.clickButton} type="button">Click me  </Button>
            <button onClick={this.BamThiBam}>Chiem lay em di</button>
            <Footer bgColor="violet" />
            </React.Fragment>
        )
    }   
}

export default Maths;