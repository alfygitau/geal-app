import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Table, Box, Button, TextField} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import dynamic from "next/dynamic";
import { GrView } from 'react-icons/gr';
import { AiTwotoneDelete } from 'react-icons/ai';
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

function createData( name, calories, fat, carbs, protein, service, scheduled ) {
    return { name, calories, fat, carbs, protein, service, scheduled };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0,  ),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0, ),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 24, 4.0, ),
    createData('Eclair', 262, 16.0, 24, 6.0, 24, 4.0, ),
    createData('Cupcake', 305, 3.7, 67, 4.3, 24, 4.0, ),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 24, 4.0, ),
];
const chartState = {
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

export default function AllJobs({section}) {
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
                <h3>List of All jobs</h3>
                <Create section={section}/>
            </Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Client Name</StyledTableCell>
                        <StyledTableCell align="center">Seller Name</StyledTableCell>
                        <StyledTableCell align="center">Client Phone</StyledTableCell>
                        <StyledTableCell align="center">Servicemen Phone</StyledTableCell>
                        <StyledTableCell align="center">Category</StyledTableCell>
                        <StyledTableCell align="center">Sub Category</StyledTableCell>
                        <StyledTableCell align="center">Service</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><TextField id="outlined-basic" label="Search Dessert" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search SellerName" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search ClientPhone" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search ServicemanPhone" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search Category" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search SubCategory" variant="outlined" /></TableCell>
                        <TableCell align="right"><TextField id="outlined-basic" label="Search Service" variant="outlined" /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="center">{row.protein}</StyledTableCell>
                            <StyledTableCell align="center">{row.service}</StyledTableCell>
                            <StyledTableCell align="center">{row.scheduled}</StyledTableCell>
                            <StyledTableCell align="center"><Box sx={{display: 'flex', gap: 2}}>
                                <GrView style={{fontSize: '20px'}}/>
                                <AiTwotoneDelete style={{fontSize: '20px'}}/>
                                <FiEdit style={{fontSize: '20px'}}/>
                                <BsThreeDotsVertical onClick={handleClick} style={{fontSize: '20px'}}/>
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
            <Paper elevation={6}>
                {(typeof window !== 'undefined') &&
                <Chart
                    options={chartState.options}
                    series={chartState.series}
                    type="area"
                    height={350}
                />
                }
            </Paper>
        </Box>
    );
}
