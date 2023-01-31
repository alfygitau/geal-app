import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SiGooglemaps } from 'react-icons/si';
import { RiSettings2Fill } from 'react-icons/ri';
import { FcApproval } from 'react-icons/fc';

export const secondaryListItems = (
    <div>
        {/*<ListSubheader inset>Saved reports</ListSubheader>*/}
        <ListItem button>
            <ListItemIcon>
                <SiGooglemaps style={{color: 'green'}}/>
            </ListItemIcon>
            <ListItemText primary="Maps" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RiSettings2Fill style={{color: 'blue'}}/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FcApproval style={{color: 'blue'}}/>
            </ListItemIcon>
            <ListItemText primary="Approval requests" />
        </ListItem>
    </div>
);
