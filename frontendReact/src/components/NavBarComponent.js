import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory, useParams } from 'react-router-dom'
import '../styles/NavBar.css';
import 'antd/dist/antd.css';
import UserService from '../services/UserService';
import { Layout, Menu, Calendar } from 'antd';
import {
    FileSearchOutlined,
    PieChartOutlined,
    BlockOutlined,
    HistoryOutlined,
    UserOutlined,
} from '@ant-design/icons';


const NavBarComponent = () => {

    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const [data, setData] = useState({});
     const history = useHistory();

    useEffect(() => {

        UserService.fetchUserData().then((response) => {
          setData(response.data);
    
        }).catch((e) => {
    
          localStorage.clear();
          history.push('/')
          console.log(e)
        })
      }, [])

    return (
        <div>
        <Menu theme="dark"  mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} className=' mt-3'>
                <Link to="/dashboard" className='linkText'>Dashboard</Link>
            </Menu.Item>
            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 && <SubMenu key="sub1" icon={<UserOutlined />} title="Users" className='linkText mt-3'>
                {/* <Menu.Item key="3"><Link to="/students" className='linkText'>Students</Link></Menu.Item> */}
                <Menu.Item key="4"><Link to="/users" className='linkText'>Users</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/quittedusers" className='linkText'>Quitted Users</Link></Menu.Item>
            </SubMenu>}
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
    )
}

export default NavBarComponent