import React, {Component, useState, useEffect } from 'react'
import ReactApexChart from "react-apexcharts";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const AttendenceChartComponent = (props) => {

    const [options, setObject]= useState({
        chart: {
            id: "apex",
            height: 450,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Average Attendence Movement',
            align: 'left'
          },
          subtitle: {
            text: 'Attendence Chart',
            align: 'center'
          },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'month',
            categories: []
        },
        tooltip: {
            x: {
                format: 'month'
            },
        },
    })

    const [ series, setSeries] = useState([{
        name: 'Students',
        data: []
    }, {
        name: 'Teachers',
        data: []
    }])

    useEffect(() => {
        const stud = props.student;
        const teach = props.teacher;
        const categ = props.categories;
        // stud.push(props.student);
        // teach.push(props.teacher);
        // categ.push(props.categories);
        // console.log(stud)
        // console.log(teach)
        // console.log(categ)

        setObject({
            chart: {
                id: "apex",
                height: 450,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: 'Average Attendence Movement',
                align: 'left'
              },
              subtitle: {
                text: 'Attendence Chart',
                align: 'center'
              },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'month',
                categories: categ
            },
            tooltip: {
                x: {
                    format: 'month'
                },
            },
        })

        setSeries([{
            name: 'Students',
            data: stud
        }, {
            name: 'Teachers',
            data: teach
        }])


    }, [])

    return (
        <div data-aos='zoom-in'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 920,
                            height: 400,
                        },
                    }}
                >
                    <Paper elevation={24}>
                        <h6 className='m-3'>Average Monthly Attendence in Last 5 Months </h6>
                        <div id="chart" className='mt-3'>
                            <ReactApexChart options={options} series={series} type="area" height={300} />
                        </div>
                    </Paper>
                </Box>
            </div>
    )
}

export default AttendenceChartComponent
