import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import '../styles/NavBar.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Calendar } from 'antd';
import {
    FileSearchOutlined,
    PieChartOutlined,
    BlockOutlined,
    HistoryOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

class NavBarComponent extends Component {

    render() {
        return (
            <div>
                <Menu theme="dark"  mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />} className=' mt-3'>
                        <Link to="/dashboard" className='linkText'>Dashboard</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Users" className='linkText mt-3'>
                        <Menu.Item key="3"><Link to="/students" className='linkText'>Students</Link></Menu.Item>
                        <Menu.Item key="4" className='linkText'>Teachers</Menu.Item>
                        <Menu.Item key="5" className='linkText'>Parents</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<HistoryOutlined />} className='linkText mt-3'>Attendence</Menu.Item>
                    <Menu.Item key="7" icon={<BlockOutlined />} className='linkText mt-3'>Class</Menu.Item>
                    <Menu.Item key="8" icon={<FileSearchOutlined />} className='linkText mt-3'>Reports</Menu.Item>
                    <Menu.Item key="9" icon={<HistoryOutlined />} className='linkText mt-3'>Library</Menu.Item>
                    <Menu.Item key="10" icon={<BlockOutlined />} className='linkText mt-3'>Account</Menu.Item>
                    <Menu.Item key="11" icon={<FileSearchOutlined />} className='linkText mt-3'>Subjects</Menu.Item>
                    <Menu.Item key="12" icon={<HistoryOutlined />} className='linkText mt-3'>Notice</Menu.Item>
                    <Menu.Item key="13" icon={<BlockOutlined />} className='linkText mt-3'>Exam</Menu.Item>
                    <Menu.Item key="14" icon={<FileSearchOutlined />} className='linkText mt-3'>Message</Menu.Item>
                </Menu>
                {/* <div className="site-calendar-demo-card ml-2 mr-3">
                    <h6 className='text-center text-primary' style={{ backgroundColor:'white', fontFamily:'cambria math'}}>Event Calender</h6>
                    <Calendar fullscreen={false} />
                </div> */}

            </div>

        );
    }
}
export default NavBarComponent;