import React from 'react';
import PropTypes from 'prop-types';
const Result = (props) => {
    return (
        <>
            <h3>{props.result}</h3>
        </>
    )
};

Result.propsTypes = {
    result: PropTypes.string
}

export default React.memo(Result);