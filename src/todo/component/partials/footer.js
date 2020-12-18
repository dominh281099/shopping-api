import React from 'react';
import { Layout } from 'antd';
const {  Footer } = Layout;
const FooterComponent = () => {
    return(
        <Footer>
            <div className="my-footer">
                <h1 style={{textAlign: 'center'}}>Copyright © 2020 - REACJS</h1>
            </div>
        </Footer>
    )
}
export default React.memo(FooterComponent);