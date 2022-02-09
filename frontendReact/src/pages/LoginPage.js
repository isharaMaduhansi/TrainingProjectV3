import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/HomePage.css';
import FooterComponent from '../components/FooterComponent';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../styles/LoginForm.css';
import UserService from '../services/UserService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const LoginPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const history = useHistory();


    const getUserCredentials = () => {
      
        if(userName=='' || password == ''){
            toast.warning('Please enter Username and Password')
            return 0;
           }
        const user = { userName, password }
        UserService.sendCredentials(user).then((response) => {

            if (response.status === 200) {
                toast.success('Login Success!')
               localStorage.setItem('USER_KEY', response.data.token)
                history.push('/dashboard')
            }
            else {
                toast.error('Something Wrong! Please Try Again')
            }

        }).catch(error => {

            if(error && error.response){
            
                switch(error.response.status){
                    case 400:
                        toast.error('Authentication Failed. Bad Credentials')
                        break;
                    default:
                        toast.error('Something Wrong! Please Try Again')   
                }    
                }
                else{
                    toast.error('Something Wrong! Please Try Again')
                }
        })
    }
    return (
        <div>
            <div className='bg'>
                <div className='container'>

                    <div className="site-card-border-less-wrapper" style={{ height: '350px' }}>
                        <h1 className='m-3'>Login Here</h1>
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <div className='loginForm'>

                                    <Form onSubmit={getUserCredentials} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} >
                                        <Form.Item className='label form-contol'
                                            label={<label style={{ color: "Lightgray" }}>Username</label>} 
                                            name="username"
                                            rules={[
                                                {
                                                  required: true,
                                                  message: 'Please input your username!',
                                                },
                                              ]}
                                        >
                                            <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
                                        </Form.Item>

                                        <Form.Item label={<label style={{ color: "Lightgray" }}>Password</label>}
                                            name="password"
                                            rules={[
                                                {
                                                  required: true,
                                                  message: 'Please input your password!',
                                                },
                                              ]}
                                        >
                                            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Item>

                                        <Form.Item className='mt-5' wrapperCol={{ offset: 8, span: 16,  }}>
                                            <Button id='submitBtn' onClick={() => getUserCredentials()} ghost style={{ marginRight: '10px' }} className='linkText'>Submit </Button>
                                            <Button ghost><Link to="/" className='linkText'> Cancel </Link> </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>


    )
}

export default LoginPage