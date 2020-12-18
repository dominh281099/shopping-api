import React from 'react';
import { Layout } from 'antd';

const {Header} = Layout;
const HeaderComponent = () =>{
    return(
        <Header >
            <h1 style={{color: 'white', textAlign: 'center'}}>Danh sach cac nguoi anh em</h1>
        </Header>

    )

}
export default React.memo(HeaderComponent);