import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import GenderChart from './GenderChart';
import ReactApexChart from "react-apexcharts";

const DropDownComponent = (props) => {

    // const student2021 = [70, 30]
    // const student2020 = [43, 57]
    // const student2019 = [33, 67]
    // const student2018 = [22, 78]

    const [year, setYear] = useState('2021')

    const years = [
        {
            value: '2021',
        },
        {
            value: '2020',
        },
        {
            value: '2019',
        },
        {
            value: '2018',
        },
    ];

    return (
        <div data-aos='zoom-in'>
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 400,
                        },
                    }}
                >
                    <Paper elevation={24} >
                        <div className='m-3'>
                            <div style={{ float: 'left' }}> <h5 >Students</h5></div>
                            <div style={{ float: 'right' , marginRight:'70px'}}>

                                <select value={year} onChange={(e) => setYear(e.target.value)}>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>

                                </select>
                            </div>
                        </div>

                        <div id="chart" className='m-3'>
                            <GenderChart year={year}/>
                        </div>

                    </Paper>
                </Box>
            </div>
        </div>



    )
}

export default DropDownComponent






