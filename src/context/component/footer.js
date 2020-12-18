import React from 'react';
import MyContext from '../global/my-context';

const FooterComponent = () => {
    return(
        <MyContext.Consumer>
            {context => (<footer className="my-footer">
                <p>Copyright © 2020 - RJS2007B</p>
                <p>alo: {context.email}</p>
            </footer>)}
            {/* // <footer className="my-footer">
            //     <p>Copyright © 2020 - RJS2007B</p>
            // </footer> */}
        </MyContext.Consumer>
    )
};

export default FooterComponent;