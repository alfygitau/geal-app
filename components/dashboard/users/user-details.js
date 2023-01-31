import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {Box, Divider, Grid, Table, TextField} from "@mui/material";
import Create from "../components/create";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {AiOutlineEye, AiTwotoneDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {BsThreeDotsVertical} from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {styled} from "@mui/material/styles";
import dynamic from "next/dynamic";

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
const UserDetails = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { userId } = router.query;

    return (
        <div >
            <div
                className="custom-button"
                onClick={() => getUser(dispatch, userId)}
            >
                RETRY
            </div>
            <Box mt={3}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mx: 2}}>
                    <h3>List of Servicemen</h3>
                    <Create section={section}/>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Serviceman</StyledTableCell>
                                <StyledTableCell align="center">National ID</StyledTableCell>
                                <StyledTableCell align="center">	Category</StyledTableCell>
                                <StyledTableCell align="center">	Sub Category</StyledTableCell>
                                <StyledTableCell align="center">	Service</StyledTableCell>
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
                <h3>Cumulative figure of all servicemen</h3>
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
        </div>
    );
};

export default UserDetails;
