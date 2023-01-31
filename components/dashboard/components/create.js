import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

const Create = ({section}) => {
    const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400}}
            role="presentation"
        >
            {section === 'all_jobs' && (
                <Box sx={{width: '100%', position: 'fixed', color: 'white', padding: '10px', background: '#283046',}}>
                    Add Job
                </Box>
            )}
            {section === 'roles' && (
                <Box sx={{color: 'white', padding: '10px', background: '#283046',}}>
                    Add Role
                </Box>
            )}
            {section === 'skills' && (
                <Box sx={{color: 'white', padding: '10px', background: '#283046',}}>
                    Add Skill
                </Box>
            )}
            <Box>
                {section === 'roles' && (
                    <Box
                        sx={{
                            width: 500,
                            p: 2,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Name"
                            id="fullWidth"
                            multiline
                        />
                        <TextField
                            sx={{mb:2}}
                            multiline
                            rows={4}
                            fullWidth
                            label="Description"
                            id="fullWidth" />
                        <Box>
                            <h3>Permissions</h3>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <span>Can do anything</span>
                        </Box><br/>
                        <Button variant='contained'>Add Role</Button>
                    </Box>
                )}
                {section === 'all_jobs' && (
                    <Box
                        sx={{
                            width: 500,
                            p: 2,
                            mt: 4,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Client"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Serviceman"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service Latlong"
                            id="fullWidth"
                            multiline
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Client Latlong"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Category"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Sub Category"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Scheduled"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service Time"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Serviceman Latlng"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service Fee"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Admin Fee"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service Start Time"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service End Time"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service Status"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Paid Status"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Amount Paid"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Payment Time"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Created At"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Updated At"
                            id="fullWidth"
                        />
                        <Button variant='contained'>Add Role</Button>
                    </Box>
                )}
                {section === 'skills' && (
                    <Box
                        sx={{
                            width: 500,
                            p: 2,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Serviceman"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="National ID"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Category"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Sub Category"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Service"
                            id="fullWidth"
                        />
                        <TextField
                            sx={{mb:2}}
                            fullWidth label="Created At"
                            id="fullWidth"
                        />
                        <Button variant='contained'>Add Role</Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant="contained" sx={{background: "#5CB85C"}} onClick={toggleDrawer(anchor, true)}><VscAdd style={{fontSize: '20px'}}/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Create;