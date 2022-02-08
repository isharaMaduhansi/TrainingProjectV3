import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import StudentService from '../services/StudentService';
import SuccessAlertComponent from '../components/SuccessAlertComponent';
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


const ListStudentPage = () => {

    const [students, setStudent] = useState([])
    const location = useLocation();
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState('')

    useEffect(() => {
        getAllStudents();
    }, [location])

    const getAllStudents = () => {
        StudentService.getStudents().then((response) => {
           // console.log(response)
            setStudent(response.data)
        }).catch(error => {
            setError(true)
                if(error.response){
                    setAlert(error.response.data.message)
                }else{
                    setAlert(error.message)
                }
            
        })
    }

    const deleteStudent = (studentId) => {

        if ((window.confirm("Are you sure you wish to delete this student?"))) {
            StudentService.deleteStudent(studentId).then((response) => {
                getAllStudents();
            }).catch(error => {
                setError(true)
                if(error.response){
                    setAlert(error.response.data.message)
                }else{
                    setAlert(error.message)
                }
            })
        }
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
                            <h3 className='m-3 topic'> Student Portal</h3>
                            <BreadcrumbComponent page="Students" />
                            <div className='container-fluid'>
                                <SuccessAlertComponent status={location.state} />
                                <WarningAlertComponent status={error} msg= {alert}/>
                                <h3 className="text-center" style={{ color: "#E1AD01", fontFamily: 'Robot' }}>All Student Data</h3>
                                <div className="row-col-3 text-center mt-4">
                                <Link to="/add-students"  > 
                                    <Button type="primary" shape="round" icon={<PlusOutlined />} size='large'className="linkText">
                                      Add New Student 
                                    </Button>
                                    </Link>
                                </div>
                                <br></br>
                                <div className="row">
                                    <Paper elevation={24} >
                                        <TableContainer >
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table table-striped table-hover table-light ml-3'>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={{ width: '20px' }}>Action</TableCell>

                                                        <TableCell align="left" style={{ width: '20px' }}>PHOTO </TableCell>
                                                        <TableCell align="center">STUDENT ID</TableCell>
                                                        <TableCell align="center">FIRST NAME</TableCell>
                                                        <TableCell align="center">LAST NAME</TableCell>
                                                        <TableCell align="right">GENDER</TableCell>
                                                        <TableCell align="right">EMAIL ADDRESS</TableCell>
                                                        <TableCell align="right">DATE OF BIRTH</TableCell>
                                                        <TableCell align="right">CONTACT NO</TableCell>
                                                        <TableCell align="right">ADDRESS</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {students.map(student => (
                                                        <TableRow className='rowcell'
                                                            key={student.id}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                            <TableCell>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="link">
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu variant="dark">
                                                                        <Dropdown.Item>
                                                                            <Link className="linkText2" to={`/view-students/${student.id}`} ><EyeOutlined />&nbsp;&nbsp;View More</Link>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className='mt-2 '> <Link className="linkText2" to={`/edit-students/${student.id}`} ><FormOutlined />&nbsp;&nbsp;Update</Link></Dropdown.Item>
                                                                        <Dropdown.Item className='mt-2'>   <Link className="linkText2" onClick={() => deleteStudent(student.id)}><DeleteOutlined /> &nbsp;&nbsp;Delete</Link></Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </TableCell>

                                                            <TableCell component="th" scope="row" align="left">
                                                                <Avatar  children={student.firstName[0]+student.lastname[0]} sx={{ bgcolor: amber[700] }}/>
                                                            </TableCell>
                                                            <TableCell align="center" style={{ lineHeight: '50px' }}>
                                                                {student.id}
                                                            </TableCell>
                                                            <TableCell align="center">{student.firstName}</TableCell>
                                                            <TableCell align="center">{student.lastname}</TableCell>
                                                            <TableCell align="right">{student.gender}</TableCell>
                                                            <TableCell align="right">{student.emailId}</TableCell>
                                                            <TableCell align="right">{new Date(student.bod).toLocaleDateString('en-CA')}</TableCell>
                                                            <TableCell align="right">{student.phone}</TableCell>
                                                            <TableCell align="right">{student.address}</TableCell>
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

export default ListStudentPage
