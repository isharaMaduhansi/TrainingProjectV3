import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import WarningAlertComponent from '../components/WarningAlertComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import NavBarComponent from '../components/NavBarComponent';
import '../styles/ListStudent.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from 'antd';
import { PlusOutlined, EyeOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dropdown } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import { amber } from '@mui/material/colors';
import UserDetailService from '../services/UserDetailService';
import UserInfoComponent from '../components/UserInfoComponent';


const ListDeletedUsers = () => {

    const [users, setUsers] = useState([])
    const location = useLocation();
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState('')

    useEffect(() => {
        getAllUsers();
    }, [location])

    const getAllUsers = () => {

        UserDetailService.getDeletedUsers().then((response) => {
           // console.log(response)
           setUsers(response.data)
        }).catch(error => {
            setError(true)
                if(error.response){
                    setAlert(error.response.data.message)
                }else{
                    setAlert(error)
                }          
        })
    }

    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2} md={2}>
                        <div className='sideBar'>
                            <NavBarComponent />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10} className='bgColor'>
                        <div className='content'>
                        <div className='div1' >
                                <div>
                                    <h3 className='m-3 topic'>User Portal</h3>
                                </div>
                                <div className='m-2'>
                                <UserInfoComponent/>
                                </div>
                            </div>
                            <BreadcrumbComponent page="Deleted-Users" />
                            <div className='container-fluid'>
                                <WarningAlertComponent status={error} msg= {alert}/>
                                <h3 className="text-center" style={{ color: "#E1AD01", fontFamily: 'Robot' }}>All Deleted Users</h3>
                                <div className="row-col-3 text-center mt-4">
                                </div>
                                <br></br>
                                <div className="row">
                                    <Paper elevation={24} >
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table table-striped table-hover table-light ml-3'>
                                                <TableHead>
                                                    <TableRow>

                                                        <TableCell align="left" style={{ width: '20px' }}>PHOTO </TableCell>
                                                        <TableCell align="center">STUDENT ID</TableCell>
                                                        <TableCell align="center">FIRST NAME</TableCell>
                                                        <TableCell align="center">LAST NAME</TableCell>
                                                        <TableCell align="right">GENDER</TableCell>
                                                        <TableCell align="right">EMAIL ADDRESS</TableCell>
                                                        <TableCell align="right">DATE OF BIRTH</TableCell>
                                                        <TableCell align="right">CONTACT NO</TableCell>
                                                        <TableCell align="right">ROLE</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {users.map(user => (
                                                        <TableRow style={{fontSize:'12pt'}} className='rowcell'
                                                            key={user.id}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                                            <TableCell component="th" scope="row" align="left">
                                                                <Avatar children={user.firstName[0]+user.lastName[0]} sx={{ bgcolor: amber[700] }}/>
                                                            </TableCell>
                                                            <TableCell align="center" style={{ lineHeight: '50px' }}>
                                                                {user.id}
                                                            </TableCell>
                                                            <TableCell align="center">{user.firstName}</TableCell>
                                                            <TableCell align="center">{user.lastName}</TableCell>
                                                            <TableCell align="right">{user.gender}</TableCell>
                                                            <TableCell align="right">{user.email}</TableCell>
                                                            <TableCell align="right">{new Date(user.bod).toLocaleDateString('en-CA')}</TableCell>
                                                            <TableCell align="right">{user.phoneNumber}</TableCell>
                                                            <TableCell align="right">{user.authorities[0].roleCode}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>
                                </div>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default ListDeletedUsers
