import React, { Component } from 'react';
import './common.css';
import PropTypes from 'prop-types';


class HeaderComponent extends Component{
    render(){
        return (
            <>
            {/* day la ma jsx */}
        <header style={{backgroundColor: this.props.bgColor}} className="header">
                <h1>This is a header</h1>
            </header>
            </>
        );
    }
}

HeaderComponent.propTypes = {
    bgColor: PropTypes.string.isRequired,
}

HeaderComponent.defaultProps = {
    bgColor: "green",
}
export default HeaderComponent;