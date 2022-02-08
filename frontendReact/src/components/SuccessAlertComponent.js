import React from 'react'
import { Link, } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const SuccessAlertComponent = (props) => {

    const successAlert = () => {
        if (props.status) {
            return <Alert severity="success">
                <AlertTitle >Success!</AlertTitle>
                You have done successfully <strong>
                    &nbsp;&nbsp;Back to <Link to="/students">Student</Link></strong>
            </Alert>
        }
    }

    return (
        <div>
            {successAlert()}
        </div>
    )
}

export default SuccessAlertComponent