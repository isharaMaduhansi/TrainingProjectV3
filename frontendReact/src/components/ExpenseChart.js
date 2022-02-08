import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ReactApexChart from "react-apexcharts";


class ExpenseChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Revenue',
                data: [195, 215, 255, 220, 235]
            }, {
                name: 'Expenses',
                data: [100, 75, 80, 55, 45]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 300
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                  subtitle: {
                    text: 'Revenue and Expenses Chart',
                    align: 'center'
                  },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                },
                yaxis: {
                    title: {
                        text: 'LKR (thousands)'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "LKR " + val + " thousands"
                        }
                    }
                }
            },
        };
    }


    render() {
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
                    <h6 className='m-3'>Revenue & Expenses Movement in last 5 Months</h6>
                        <div id="chart" className='mt-3'>
                            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
                        </div>

                    </Paper>
                </Box>
            </div>
        )
    }
}

export default ExpenseChart