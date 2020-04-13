import React from 'react';
import Planner from '../componentes/Planner/Planner';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link, Route} from 'react-router-dom';

import {
   DesktopOutlined,
   PieChartOutlined,
   FileOutlined,
   TeamOutlined,
   UserOutlined,
 } from '@ant-design/icons';


 const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => {
   return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider
      // collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
      
      >
        <div className="logo" >LOGO</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
             <Link to='/planner' ></Link>
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
             <Link to='/login' ></Link>
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
         
         
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Route path="/planner" component={Planner}>
          </Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
   );
};

export default Home;