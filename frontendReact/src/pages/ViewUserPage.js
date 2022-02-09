import React, { useState, useEffect } from 'react'
import { useParams , Link} from 'react-router-dom';
import NavBarComponent from '../components/NavBarComponent';
import ListComponent from '../components/ListComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import '../styles/ViewStudent.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { amber } from '@mui/material/colors';
import { Button } from 'antd';
import UserDetailService from '../services/UserDetailService';
import UserInfoComponent from '../components/UserInfoComponent';


const ViewUserPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [emailId, setEmailId] = useState('')
    const [bod, setBod] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setaddress] = useState('')
    const { id } = useParams();
    const fullName = firstName+" "+lastname
    const IDsecondary = "User ID : "+id
    const birthday = new Date(bod).toLocaleDateString('en-CA')
    const primaryArray = [fullName, gender, emailId, birthday, phone, address]
    const secondaryArray = [IDsecondary, 'Gender', 'Email Address', 'Date of Birth', 'Contact Info', 'Address']
    

    useEffect(() => {

        UserDetailService.getUserById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastname(response.data.lastName)
            setGender(response.data.gender)
            setEmailId(response.data.email)
            setBod(response.data.bod)
            setPhone(response.data.phoneNumber)
            setaddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2} md={2}>
                        <div className='sideBar'>
                            <NavBarComponent />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                        <div className='content'>
                        <div className='div1' >
                                <div>
                                    <h3 className='m-3 topic'>User Portal</h3>
                                </div>
                                <div className='m-2'>
                                <UserInfoComponent/>
                                </div>
                            </div>
                            <BreadcrumbComponent page="View User" />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'flex-end'}} className='container-fluid'>
                            <Link to="/users">
                                 <Button type="primary" className="linkText" ghost>Back to User </Button>
                            </Link>
                                    </div>
                            <Box className='boxPaper'
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 800,
                                        maxHeight: 1200,
                                    },
                                }}
                            >
                                <Paper elevation={24}>
                                <Grid container spacing={2} className='m-2' alignContent='center'>

                                    <Grid item xs={11} sm={4} md={4}>
                                    <h2 style={{ fontFamily: 'Robot' }} className='mb-5 text-primary font-weight-bold'>About {firstName}</h2>
                                    <Avatar className='m-5'  children={firstName[0]+lastname[0]} sx={{ bgcolor: amber[700] , width: 200, height: 200, fontSize:70  }}/>
                                    </Grid>

                                    <Grid item xs={11} sm={7} md={7}>
                                            <ListComponent primary = { primaryArray } secondary={ secondaryArray }/>
                                    </Grid>
                                </Grid>
                                </Paper>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ViewUserPage
