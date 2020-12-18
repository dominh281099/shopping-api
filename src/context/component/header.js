import React from 'react';
import MyContext from '../global/my-context';

const HeaderComponent = () => {
    return(
        <MyContext.Consumer>
        {context => ( <header className="my-header">
            <h1 className="title">This is a header</h1>
            <p>hi: {context.username}</p>
        </header>)}
        {/* <header className="my-header">
            <h1 className="title">This is a header</h1>
            <p></p>
        </header> */}
        </MyContext.Consumer>
    )
}

export default HeaderComponent;