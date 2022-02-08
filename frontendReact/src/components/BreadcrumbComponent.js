import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/Breadcrumb.css';

const BreadcrumbComponent = (props) => {

    return (
        <div className='breadcrumb m-3'>
            <Breadcrumb className='m-2'>
                <Breadcrumb.Item>
                    <span> <Link to="/dashboard" className='item text-primary'>Home</Link></span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span className='item text-primary'>{props.page}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbComponent