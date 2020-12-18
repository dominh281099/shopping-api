import React from 'react';
import {Row, Col, Table, Skeleton} from 'antd';
import MyContext from '../context/my-context';

const Countries = () => {
    const columns = [
        {
            title: 'Ngay Thang',
            dataIndex: 'Date',
            key: 'Date'
        },
        {
            title: 'Quoc Gia',
            dataIndex: 'Country',
            key: 'Country'
        },
        {
            title: 'Moi nhiem',
            dataIndex: 'NewConfirmed',
            key: 'NewConfirmed'
        },
        {
            title: 'Tong ca nhiem',
            dataIndex: 'TotalConfirmed',
            key: 'TotalConfirmed'
        },
        {
            title: 'Tu vong',
            dataIndex: 'NewDeaths',
            key: 'NewDeaths'
        },
        {
            title: 'Tong ca tu vong',
            dataIndex: 'TotalDeaths',
            key: 'TotalDeaths'
        },
        {
            title: 'Khoi benh',
            dataIndex: 'NewRecovered',
            key: 'NewRecovered'
        },
        {
            title: 'Tong ca khoi benh',
            dataIndex: 'TotalRecovered',
            key: 'TotalRecovered'
        }
    ];
    // Tao du lieu mau
    const data = [
        {
            Date: '2020-28-10',
            Country: 'Viet Nam',
            NewConfirmed: 13325,
            TotalConfirmed: 165,
            NewDeaths: 12,
            TotalDeaths: 36,
            NewRecovered: 32,
            TotalRecovered: 15,
        },
        {}
    ];
    
    return(
        <MyContext.Consumer>

               {context => {
                   if (context.Countries === undefined){
                       return <Skeleton active/>;
                   }
                   
               return(
                <Row style={{marginTop:'20px', marginBottom:'20px'}}>
                    <Col span={24}>
                        <Table
                        dataSource={context.Countries}
                        columns={columns}
                        />
                    </Col>
           
                </Row>
               );
            
           }} 
        </MyContext.Consumer>
        
    );

}

export default Countries;