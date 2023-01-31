import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Table, Box, TextField, Grid, Divider} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import dynamic from "next/dynamic";
import { AiTwotoneDelete, AiOutlineEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Create from "../components/create";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        background: '#283046',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData( serviceman, 	nationalID, category, subCategory, service, createAt ) {
    return { serviceman, nationalID, category, subCategory, service, createAt};
}

const rows = [
    createData('jimmy', '12345678', 'Residential Services', 'Appliances', 'Microwave', '2019-06-15 09:51:41' ),
    createData('MIchael', '12345678', 'Residential Services', 'Laundry', 'Microwave', '2019-06-15 09:51:41'),
    createData('Jay', '12345678', 'Residential Services', 'Kitchen', '\tMicrowave', '2019-06-15 09:51:41'),
    createData('Dicky', '12345678' , 'Residential Services', 'Kitchen', '\tMicrowave', '2019-06-15 09:51:41'),
    createData('Anthony', '12345678', 'Residential Services', 'Kitchen', '\tMicrowave', '2019-06-15 09:51:41' ),
    createData('Jay', '12345678', 'Residential Services', 'Kitchen', '\tMicrowave', '2019-06-15 09:51:41'),
    createData('Michael', '12345678', 'Residential Services', 'Kitchen', '\tMicrowave', '2019-06-15 09:51:41')
];
const semiPie = {
    series: [44, 55, 41, 17, 15],
    options:{
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10
            }
        },
        grid: {
            padding: {
                bottom: -80
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};
const pieState = {
    series: [44, 55, 13, 43, 22],
    options : {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
};
const chartState = {
    series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
        },
        forecastDataPoints: {
            count: 7
        },
        stroke: {
            width: 5,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels: {
                formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
            }
        },
        title: {
            text: 'Forecast',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#666'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        yaxis: {
            min: -10,
            max: 40
        }
    },
}

export default function ListUsers({section}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box mt={3}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mx: 2}}>
                <h3>List of Users</h3>
                <Create section={section}/>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell align="center"> Last Name</StyledTableCell>
                            <StyledTableCell align="center">	Email</StyledTableCell>
                            <StyledTableCell align="center">	Phone</StyledTableCell>
                            <StyledTableCell align="center">	Country</StyledTableCell>
                            <StyledTableCell align="center">Created At</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"><TextField id="outlined-basic" label="Search Dessert" variant="outlined" /></TableCell>
                            <TableCell align="center"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                            <TableCell align="center"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                            <TableCell align="center"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                            <TableCell align="center"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                            <TableCell align="center"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.serviceman}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.nationalID}</StyledTableCell>
                                <StyledTableCell align="center">{row.category}</StyledTableCell>
                                <StyledTableCell align="center">{row.subCategory}</StyledTableCell>
                                <StyledTableCell align="center">{row.service}</StyledTableCell>
                                <StyledTableCell align="center">{row.createAt}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Box sx={{display: 'flex', gap: 1}}>
                                        <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#5CB85C", borderRadius: '5px'}}>
                                            <AiOutlineEye style={{fontSize: '20px', color: "white", marginTop: "5px"}}/>
                                        </Box>
                                        <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#d9534f", borderRadius: '5px'}}>
                                            <AiTwotoneDelete style={{fontSize: '20px', color: "white", marginTop: "5px"}}/>
                                        </Box>
                                        <Box sx={{justifyContent: "center", height: "30px", width:"30px", background: "#337AB7", borderRadius: '5px'}}>
                                            <FiEdit style={{fontSize: '20px',color: "white",  marginTop: "5px"}}/>
                                        </Box>
                                        <BsThreeDotsVertical onClick={handleClick} style={{color: "#337AB7", fontSize: '20px', marginTop: "6px"}}/>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>Update</MenuItem>
                                        </Menu>
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer><br/>
            <Stack>
                <Pagination count={10} variant="outlined" shape="rounded" color='primary'/>
            </Stack><br/>
            <h3>Cumulative figure of all jobs</h3>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper elevation={6}>
                        <span>Data of all the skills <br/>Yearly, monthly</span>
                        {(typeof window !== 'undefined') &&
                        <Chart
                            options={chartState.options}
                            series={chartState.series}
                            type="line"
                            height={400}
                        />
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={6}>
                        <span>Pie</span>
                        {(typeof window !== 'undefined') &&
                        <Chart
                            options={pieState.options}
                            series={pieState.series}
                            type="pie"
                            height={200}
                        />
                        }
                        <Divider/>
                        <span>Skill growth</span>
                        {(typeof window !== 'undefined') &&
                        <Chart
                            options={semiPie.options}
                            series={semiPie.series}
                            type="pie"
                            height={200}
                        />
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
