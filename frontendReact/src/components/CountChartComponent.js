import React, {Component, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../styles/CountChartComponent.css';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import { lightBlue, grey } from '@mui/material/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CountChartComponent = (props) => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);


    return (

        <div data-aos='fade-up'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 390,
                        height: 150,
                    },
                }}
            >
                <Paper elevation={24} style={{fontFamily:'Cambria Math'}}>
                    <div className='div1' >
                        <div className='m-3'>
                        <Avatar className='m-3' sx={{bgcolor: lightBlue[100] ,width: 70, height: 70 }}>{props.icon}</Avatar>
                        </div>
                        <div className='m-3'>
                            <h6>{props.title}</h6>
                            <h3>{props.count}</h3>
                        </div>
                    </div>

                </Paper>
            </Box>
        </div>
    )
}

export default CountChartComponent