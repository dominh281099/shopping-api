import React from 'react';
import PropTypes from 'prop-types';

const ButtonAddTodo = props => {
    return (
        <>
            <button onClick={() => props.add(props.value)} type={props.type}>{props.children}</button>
        </>
    )
}

ButtonAddTodo.propsTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    add: PropTypes.func,
    value: PropTypes.string
}

export default React.memo(ButtonAddTodo);