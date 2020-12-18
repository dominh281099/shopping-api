import React from 'react';
import { useHistory } from "react-router-dom";// tra ve trang login
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import * as api from '../service/login_service';


const { Header } = Layout;

const HeaderComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const pathName = location.pathname;
  const user = api.getUsername();

  //Viet ham THoat
  const logout = () =>{
    //xoa api
    api.removeTokenLogin();
    history.push('/login');
  }

  return (
    <Header>
      <NavLink to="/">
        <div className="logo" />
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName}>
        <Menu.Item key="/home">
          <NavLink to="/home">Trang chủ</NavLink>
        </Menu.Item>
        <Menu.Item key="/up-coming">
          <NavLink to="/up-coming">Phim sắp công chiếu</NavLink>
        </Menu.Item>
        <Menu.Item key="/search">
          <NavLink to="/search">Tìm kiếm phim</NavLink>
        </Menu.Item>
        {user == null && (
          <Menu.Item key="/login">
            <NavLink to="/login">Đăng nhập</NavLink>
          </Menu.Item>
        )}
        {user !== null && (
          <Menu.Item key="/login">
            Hi : {user}
          </Menu.Item>
        )}

        {user !== null && (
          <Menu.Item key="/logout">
            <span onClick={() =>logout()}>Thoat</span>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderComponent);
