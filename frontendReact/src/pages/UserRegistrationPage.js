import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom';  //useparams gets the key value pairs from the URL
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
import UserDetailService from '../services/UserDetailService';
import UserInfoComponent from '../components/UserInfoComponent';

const UserRegistrationPage = () => {

    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [nicNumber, setNic] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmailId] = useState('')
    const [bod, setBod] = useState('')
    const [phoneNumber, setPhone] = useState('')
    const [authority, setAuthority] = useState('')
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

    const roleTypes = [
        {
            value: 'ADMIN',
        },
        {
            value: 'STUDENT',
        },
        {
            value: 'TEACHER',
        },
        {
            value: 'PARENT',
        },
    ];

    const saveOrUpdateStudent = (e) => {

        e.preventDefault();
        const user = { userName, firstName, lastName,nicNumber, gender, email, bod, phoneNumber, authority, address }

        if (id) {
            UserDetailService.updateUser(user, id).then((response) => {
            
                setMessage(true)
                history.push({
                    pathname: '/users',
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
            UserDetailService.registeruser(user).then((response) => {
   
                console.log(response)
                setMessage(true)
                history.push('/add-users')
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

        UserDetailService.getUserById(id).then((response) => {
            setUserName(response.data.userName)
            setFirstName(response.data.firstName)
            setLastname(response.data.lastName)
            setNic(response.data.nicNumber)
            setGender(response.data.gender)
            setEmailId(response.data.email)
            setBod(response.data.bod)
            setPhone(response.data.phoneNumber)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const title = () => {

        if (id) {
            return "Update User"
        } else {
            return "Add New User"
        }
    }

    const clearForm = () => {

        setUserName('')
        setFirstName('')
        setLastname('')
        setNic('')
        setEmailId('')
        setBod('')
        setGender('')
        setPhone('')
        setAuthority('')
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
                        <div className='div1' >
                                <div>
                                    <h3 className='m-3 topic'>User Portal</h3>
                                </div>
                                <div className='m-2'>
                                <UserInfoComponent/>
                                </div>
                            </div>
                            <BreadcrumbComponent page="User-Register" />
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
                                                height: 780,
                                            },
                                        }}
                                    >
                                        <Paper elevation={24}>

                                            <div className='m-3'>
                                                <div className="card-body">
                                                    <form onSubmit={saveOrUpdateStudent}>
                                                    <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="User Name"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="Ishara_96"
                                                                value={userName}
                                                                onChange={(e) => setUserName(e.target.value)}
                                                            />
                                                        </div>
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
                                                                value={lastName}
                                                                onChange={(e) => setLastname(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                label="NIC"
                                                                className="textArea"
                                                                variant="filled"
                                                                size="normal"
                                                                placeholder="Hansi"
                                                                value={nicNumber}
                                                                onChange={(e) => setNic(e.target.value)}
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
                                                                value={email}
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
                                                                value={phoneNumber}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                select
                                                                label="User Role"
                                                                className="textArea"
                                                                size="normal"
                                                                value={authority}
                                                                variant="filled"
                                                                onChange={(e) => setAuthority(e.target.value)}>
                                                                {roleTypes.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.value}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <TextField
                                                                required
                                                                multiline
                                                                rows={2}
                                                                maxRows={2}
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
                                                        <Link to="/users" style={{ textDecoration: "none" }} className='btn btn-outline-primary'>Cancel</Link>
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

export default UserRegistrationPage