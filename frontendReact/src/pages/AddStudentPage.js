import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom';  //useparams gets the key value pairs from the URL
import StudentService from '../services/StudentService';
import SuccessAlertComponent from '../components/SuccessAlertComponent';
import WarningAlertComponent from '../components/WarningAlertComponent';
import NavBarComponent from '../components/NavBarComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import '../styles/AddStudent.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const AddStudentPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [emailId, setEmailId] = useState('')
    const [bod, setBod] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState('')
    const history = useHistory();  // give the instance of history object
    const { id } = useParams();
    const Item = styled(Paper)(({ theme }) => ({
    }));

    const genderTypes = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];

    const saveOrUpdateStudent = (e) => {

        e.preventDefault();
        const student = { firstName, lastname, gender, emailId, bod, phone, address }

        if (id) {
            StudentService.updateStudent(student, id).then((response) => {
            
                console.log(response.data)
                setMessage(true)
                history.push({
                    pathname: '/students',
                    state: { message }
                });
                clearForm()

            }).catch(error => {
                setError(true)
                if(error.response){
                    setAlert(error.response.data.message)
                }else{
                    setAlert(error.message)
                }
                
                
            })

        } else {
            StudentService.addStudent(student).then((response) => {

                setMessage(true)
                history.push('/add-students')
                clearForm()

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

    useEffect(() => {

        StudentService.getStudentById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastname(response.data.lastname)
            setGender(response.data.gender)
            setEmailId(response.data.emailId)
            setBod(response.data.bod)
            setPhone(response.data.phone)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const title = () => {

        if (id) {
            return "Update Students"
        } else {
            return "Add Students"
        }
    }

    const clearForm = () => {

        setFirstName('')
        setLastname('')
        setGender('')
        setEmailId('')
        setBod('')
        setPhone('')
        setAddress('')
    }

    return (

        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={2} md={2}>
                        <div className='sideBar'>
                            <NavBarComponent />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10}>
                        <div className='content'>
                            <h3 className='m-3 topic'> Student Portal</h3>
                            <BreadcrumbComponent page="Students" />
                            <div className="container-fluid">
                                <SuccessAlertComponent status={message} />
                                <WarningAlertComponent status={error} msg= {alert}/>
                                <div className="row-col-3 text-center mt-4">
                                    <h3 style={{ color: "#E1AD01", fontFamily: 'Robot' }}>{title()}</h3>

                                    <Box className='boxPaper'
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 900,
                                                height: 600,
                                            },
                                        }}
                                    >
                                        <Paper elevation={24}>

                                            <div className='m-4'>
                                                <div className="card-body">
                                                    <form onSubmit={saveOrUpdateStudent}>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="First Name"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="Ishara"
                                                                value={firstName}
                                                                onChange={(e) => setFirstName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="Last Name"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="Hansi"
                                                                value={lastname}
                                                                onChange={(e) => setLastname(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                select
                                                                label="Gender"
                                                                className="textArea"
                                                                size="normal"
                                                                value={gender}
                                                                variant="filled"
                                                                onChange={(e) => setGender(e.target.value)}>
                                                                {genderTypes.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="Email Address"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                type="email"
                                                                placeholder="abc@gmail.com"
                                                                value={emailId}
                                                                onChange={(e) => setEmailId(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="Date of Birth"
                                                                type="date"
                                                                size="normal"
                                                                variant="filled"
                                                                className="textArea"
                                                                value={bod}
                                                                onChange={(e) => setBod(e.target.value)}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="Contact No"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="0707898564"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                multiline
                                                                rows={2}
                                                                maxRows={4}
                                                                label="Address"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="33/75, abc Junction, Home town"
                                                                value={address}
                                                                onChange={(e) => setAddress(e.target.value)}
                                                            />
                                                        </div>

                                                        <button onClick={() => saveOrUpdateStudent()} className='btn btn-outline-primary m-3'>
                                                            Submit
                                                        </button>
                                                        <Link to="/students" style={{ textDecoration: "none" }} className='btn btn-outline-primary'>Cancel</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </Paper>
                                    </Box>
                                </div>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AddStudentPage