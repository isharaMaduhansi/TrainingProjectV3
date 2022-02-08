import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ListComponent from './ListComponent';
import '../styles/Notify.css';

const NotificationBar = () => {

    const primaryArray = ['School prize giving-2022/02/10', 'School Parents Meeting- 2022/03/15', 'School Annivesary Walk- 2022/03/21']
    const secondaryArray = ['At auditorium', 'At auditorium', 'For all students']

    
    return (

        <div data-aos='fade-up'>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 800,
                        height: 400,
                    },
                }}
            >
                <Paper elevation={24} >
                    <h6 className='m-3'>Notification Bar</h6>
                    <div className='m-3'>
                    <ListComponent primary = { primaryArray } secondary={ secondaryArray }/>
                    </div>
                </Paper>
            </Box>
        </div>
    )
}

export default NotificationBar