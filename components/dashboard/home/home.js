import React from 'react';
import {Paper, Box, Divider, Typography} from "@mui/material";
import { GiCandlebright } from 'react-icons/gi';
import { AiOutlineBug } from 'react-icons/ai';
import { DiYii, DiApple } from 'react-icons/di';
import { styled } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const state = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    }
    return (
        <Box sx={{mt: 2, mx: 1}}>
            <CssBaseline/>
            <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>
                        <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <center>
                                    <Box sx={{height: 50, width: 50, background: '#ea5455', borderRadius: 50}}>
                                        <DiApple style={{marginTop: '10px', fontSize: '30px', color: 'white'}}/>
                                </Box>
                                </center>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <h3>230k Sales</h3>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <center>
                            <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Since last month
                        </Typography>
                        </center>
                        </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>
                        <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <center>
                                    <Box sx={{height: 50, width: 50, background: '#7367f0', borderRadius: 50}}>
                                        <DiYii style={{marginTop: '10px', fontSize: '30px', color: 'white'}}/>
                                    </Box>
                                </center>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                               <h3>230k Sales</h3>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <center>
                            <Typography
                                component="h1"
                                variant="h5"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
                            >
                                Since last month
                            </Typography>
                        </center>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>
                        <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <center>
                                    <Box sx={{height: 50, width: 50, background: '#00cfe8', borderRadius: 50}}>
                                            <GiCandlebright style={{marginTop: '10px', fontSize: '30px', color: 'white'}}/>
                                    </Box>
                                </center>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <h3>230k Sales</h3>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <center>
                            <Typography
                                component="h1"
                                variant="h5"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
                            >
                                Since last month
                            </Typography>
                        </center>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Item>
                        <Grid sx={{mt: 2}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <center>
                                    <Box sx={{height: 50, width: 50, background: '#28c76f', borderRadius: 50}}>
                                        <AiOutlineBug style={{marginTop: '10px', fontSize: '30px', color: 'white'}}/>
                                    </Box>
                                </center>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <h3>230k Sales</h3>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <Divider/>
                        <center>
                            <Typography
                                component="h1"
                                variant="h5"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
                            >
                                Since last month
                            </Typography>
                        </center>
                    </Item>
                </Grid>
            </Grid><br/>
            <h3>Cumulative figure of all salemen, jobs, skills and all users</h3>
            <Paper elevation={6}>
                {(typeof window !== 'undefined') &&
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    height={300}
                />
                }
            </Paper>
        </Box>
    );
};

export default Home;