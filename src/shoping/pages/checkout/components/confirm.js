import React from 'react';
// import LayoutComponent from '../../../component/layout';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';


const ConfirmOrders = () => {
    return(
        <>
            <Row>
                <Col span={18} offset={3}>
                    <h1 style={{textAlign: 'center'}}>Confirm Orders</h1>
                    <Row>
                        <Col span={12}>
                            <p> Vui long dien cac thong tin ben duoi </p>
                        </Col>
                        <Col span={12}>
                            <p>Neu co TK vui long <Link to="/login"> dang nhap </Link></p>
                            <p>Hien thi thong tin cac san pham trong gio hang </p>
                        </Col>

                    </Row>
                </Col>
            </Row>
        
        </>
    )
};
export default React.memo(ConfirmOrders)
