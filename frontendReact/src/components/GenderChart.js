import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import ReactApexChart from "react-apexcharts";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../styles/CountChartComponent.css';

const GenderChart = (props) => {

    const student2021 = [70, 30]
    const student2020 = [43, 57]
    const student2019 = [33, 67]
    const student2018 = [22, 78]

    const [options, setObject] = useState({
        chart: {
            type: 'donut',
        },
        subtitle: {
            text: 'Students Gender',
            align: 'left'
        },
        labels: ['Female Students', 'Male Students'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {

                },
                legend: {
                    position: 'bottom'
                }
            },
        }]
    })

    const [series, setSeries] = useState(student2021)

    const dataSet = () => {

        switch (props.year) {
            case '2021':
                return student2021;
            case '2020':
                return student2020;;
            case '2019':
                return student2019;;
            case '2018':
                return student2018;;
            default:
                return student2021;
        }
    }

    const updateTable = () => {

        setObject({
            chart: {
                type: 'donut',
            },
            subtitle: {
                text: 'Students Gender',
                align: 'left'
            },
            labels: ['Female Students', 'Male Students'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {

                    },
                    legend: {
                        position: 'bottom'
                    }
                },
            }]
        })

        setSeries(dataSet())
    }

    return (
        <div id="chart"> 
            <Button onClick={() => updateTable()} variant="contained" endIcon={<SendIcon />} size="small" id='btn2' >
            Update
            </Button>
            <ReactApexChart options={options} series={series} type="donut" />
        </div>
    )
}

export default GenderChart
