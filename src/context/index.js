import React from 'react';
import MyProvider from './global/my-provider';
import UserProvider from './global/user-provider';
import HeaderComponent from './component/header';
import Content from './component/content';
import FooterComponent from './component/footer';

class ContextApi extends React.Component {
    render() {
        return(
        <>
        <UserProvider>
        <HeaderComponent/>
        <MyProvider>
            <Content/>
        </MyProvider>
        <FooterComponent/>
        </UserProvider>
        </>
        )
    }
}

export default ContextApi;