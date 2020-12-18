import React from 'react';
import { Layout, Row, Col } from 'antd';    
import HeaderComponent from './header';
import FooterComponent from './footer';


const { Content } = Layout;
const LayoutComponent = (props) => {
    return(
        <Layout>
            <HeaderComponent/>
            <Content>
                <Row>
                <Col span={18} offset={3}>
                    {props.children},
                </Col>
                </Row>
            </Content>
            <FooterComponent/>
        </Layout>
    )
}

export default React.memo(LayoutComponent);