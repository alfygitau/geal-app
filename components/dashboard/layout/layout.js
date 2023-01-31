import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {secondaryListItems} from "./listItems";
import Geal from '../../../assets/geal.jpg';
import Head from 'next/head';
import Image from 'next/image';
import Paper from "@mui/material/Paper";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import User from '../../../assets/user.png';
import { BsCart, BsSearch } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { MdSpaceDashboard, MdOutlineWork} from 'react-icons/md';
import { FcWorkflow, FcServiceMark, FcServices, FcManager } from 'react-icons/fc';
import { FaUsers, FaUsersCog } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { VscVmActive } from 'react-icons/vsc';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


const drawerWidth = 270;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const SidebarList = styled(List)({
  '& .MuiListItemText-root': {
    color: 'red,'
  },
});
const mdTheme = createTheme();

const GealLayout = ({section, children}) => {
  const [open, setOpen] = React.useState(true);
  const [openServicemenCollapse, setOpenServicemenCollapse] = React.useState(false);
  const [openJobsCollapse, setOpenJobsCollapse] = React.useState(false);
  const [openUserCollapse, setOpenUserCollapse] = React.useState(true);
  const [openRoleCollapse, setOpenRoleCollapse] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openx = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleServicemenCollapseClick = () => {
    setOpenServicemenCollapse(!openServicemenCollapse);
  };
  const handleJobsCollapseClick = () => {
    setOpenJobsCollapse(!openJobsCollapse);
  };
  const handleUserCollapseClick = () => {
    setOpenUserCollapse(!openUserCollapse);
  };
  const handleRoleCollapseClick = () => {
    setOpenRoleCollapse(!openRoleCollapse);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Box sx={{ display: 'flex', fontFamily: 'Quicksand, sans-serif' }}>
        <AppBar position="fixed" open={open} sx={{zIndex: 1, backgroundColor: 'whitesmoke', color: 'black', borderLeft: '15px solid blue', borderBottomRightRadius: '5px', borderTopRightRadius: '5px'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit" sx={{marginRight:'10px'}}>
              <Badge badgeContent={4} color="primary">
                <BsCart style={{marginLeft: 5}} />
              </Badge>
              <Badge badgeContent={4} sx={{color:'#283046'}}>
                <GrNotification  style={{marginLeft: '20px'}}/>
              </Badge>
              <Badge badgeContent={4} color="primary">
                <BsSearch style={{marginLeft: '20px'}} />
              </Badge>
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Typography sx={{fontFamily: 'Quicksand, sans-serif'}} variant="body2"><strong>John Doe</strong> <br/>Admin</Typography>
              <Tooltip title="Account settings">
                  <Box  sx={styles.image} onClick={handleClick} >
                    <Image className="image" src={User} width="40px" height="40px" alt=''/>
                  </Box>
              </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={openx}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer sx={styles.drawer} variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              noWrap
              sx={{ color: 'black', flexGrow: 1, fontFamily: 'Quicksand, sans-serif' }}
            >
              <center>
                <Box sx={{display: 'flex', gap: 1}}>
                <Box sx={styles.logo}>
                  <Image className='image' src={Geal} width={40} height={40} alt=""/>
                </Box>
                <b>GEAL APP</b>
                </Box>
              </center>
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{color: 'black'}}/>
            </IconButton>
          </Toolbar>
          <Divider sx={{mx: 2, boxShadow: '5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green'}}/>
          <Scrollbars style={{ height: '90vh' }}>
          <SidebarList  component={Paper}>
            <div>
              <ListItem button onClick={() => router.push('/dashboard/home', undefined, {shallow: true}) }>
                <ListItemIcon>
                  <MdSpaceDashboard style={{color: "blue"}}/>
                </ListItemIcon>
                <ListItemText sx={{fontFamily: 'Quicksand, sans-serif'}} primary="Dashboard" />
              </ListItem>
              <ListItemButton onClick={handleServicemenCollapseClick}>
                <ListItemIcon>
                  <FcServiceMark/>
                </ListItemIcon>
                <ListItemText primary="Servicemen" />
                {openServicemenCollapse ? <ExpandMore />  : <ExpandLess />}
              </ListItemButton>
              <Collapse in={openServicemenCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <FcServices />
                    </ListItemIcon>
                    <ListItemText primary="Servicemen" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <FcWorkflow />
                    </ListItemIcon>
                    <ListItemText primary="Approval Requests" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleJobsCollapseClick}>
                <ListItemIcon>
                  <MdOutlineWork style={{color: "blue"}}/>
                </ListItemIcon>
                <ListItemText primary="Jobs" />
                {openJobsCollapse ? <ExpandMore />  : <ExpandLess />}
              </ListItemButton>
              <Collapse in={openJobsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }} onClick={() => router.push('/dashboard/jobs/all_jobs', undefined, {shallow: true})}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="All jobs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="Active Jobs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="Scheduled Jobs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="Completed Jobs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="Pending Jobs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <VscVmActive />
                    </ListItemIcon>
                    <ListItemText primary="Rejected Jobs" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem button onClick={() => router.push('/dashboard/skills/skills', undefined, { shallow: true})}>
                <ListItemIcon>
                  <GiSkills style={{ color: 'green'}} />
                </ListItemIcon>
                <ListItemText primary="Skills"/>
              </ListItem>
              <ListItemButton onClick={handleRoleCollapseClick}>
                <ListItemIcon>
                  <FcManager/>
                </ListItemIcon>
                <ListItemText primary="Role Management" />
                {openRoleCollapse ? <ExpandMore />  : <ExpandLess />}
              </ListItemButton>
              <Collapse in={openRoleCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }} onClick={() =>  router.push('/dashboard/roles/roles', undefined, { shallow: true})}>
                    <ListItemIcon>
                      <BsFillMenuButtonWideFill />
                    </ListItemIcon>
                    <ListItemText primary="Roles" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleUserCollapseClick}>
                <ListItemIcon>
                  <FaUsersCog style={{color: 'blue'}} />
                </ListItemIcon>
                <ListItemText primary="User Management" />
                {openUserCollapse ? <ExpandMore />  : <ExpandLess />}
              </ListItemButton>
              <Collapse in={openUserCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 3 }} onClick={() => router.push('/user/list-users', undefined, {shallow: true})}>
                    <ListItemIcon>
                      <StarBorder style={{color: 'green'}}/>
                    </ListItemIcon>
                    <ListItemText primary="All Users" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }} onClick={() => router.push('/dashboard/servicemen/servicemen', undefined, {shallow: true})}>
                    <ListItemIcon>
                      <StarBorder style={{color: 'green'}}/>
                    </ListItemIcon>
                    <ListItemText primary="All Servicemen" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <StarBorder style={{color: 'green'}}/>
                    </ListItemIcon>
                    <ListItemText primary="All Clients" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemIcon>
                  <RiMapPin2Fill style={{color:"blue"}} />
                </ListItemIcon>
                <ListItemText primary="ServiceM Locations" />
              </ListItem>
            </div>
          </SidebarList>
          <List component={Paper}>{secondaryListItems}</List>
          </Scrollbars>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 2,
            height: '100vh',
            overflow: 'auto',
            pr: 1,
            pl: 1,
          }}
        >
          <Toolbar />
          <motion.div key={router.route} initial={{opacity: 0.5}} animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 2}}>
          {children}
          </motion.div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default GealLayout;

const styles = {
  image: {
    marginLeft: '10px',
    '.image':{
      borderRadius: '50px',
      height:'30px',
      width: '30px'
    }
  },
  logo: {
    '.image':{
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      height:'30px',
      width: '30px'
    }
  }
}
