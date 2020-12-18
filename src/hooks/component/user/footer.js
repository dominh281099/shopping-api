import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const FooterComponent = () => {
    return(
        <>
            <Footer>
                <p style={{textAlign: 'center'}}>Copyright © 2019 - React</p>
            </Footer>
        </>
    )

}
export default React.memo(FooterComponent);