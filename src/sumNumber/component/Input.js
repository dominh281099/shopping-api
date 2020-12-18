import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <>
        <input onChange={props.change} name={props.name} defaultValue={props.value}/>
        </>
    );
}
Input.propTypes = {
    // value: PropTypes.string,
    name: PropTypes.string,
    change: PropTypes.func
}

export default Input;