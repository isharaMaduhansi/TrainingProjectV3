import React from 'react'
import { Link, } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const WarningAlertComponent = (props) => {

    const wariningAlert = () => {
        if (props.status) {
            return <Alert severity="error">
                <AlertTitle >Exception Occurred!</AlertTitle>
                             {props.msg}
                 </Alert>
        }
    }

    return (
        <div>
            {wariningAlert()}
        </div>
    )
}

export default WarningAlertComponent