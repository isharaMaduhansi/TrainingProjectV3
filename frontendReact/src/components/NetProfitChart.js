import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ReactApexChart from "react-apexcharts";


class NetProfitChart extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          series: [{
            name: 'Net Profit',
            data: [95, 140, 175, 165, 190]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            subtitle: {
              text: 'Net Profit Movement',
              align: 'center'
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['2017', '2018', '2019', '2020', '2021'],
            },
            yaxis: {
              title: {
                  text: 'LKR (thousands)'
              }
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
                <h6 className='m-3'>Net Profit Movement in last 5 Years</h6>
                <div id="chart" className='mt-3'>
                 <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                       </div>
                    </Paper>
            </Box>
        </div>
        )
    }
}

export default NetProfitChart



// import React, { Component } from 'react';

// class EarningChart extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
            
//         };
//     }

//     render() {
//         return (
//         <div>
            
//         </div>
//         )
//     }
// }

// export default EarningChart