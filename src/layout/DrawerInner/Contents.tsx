import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

import { useLocation } from '@reach/router';
import ListItemAppLink from '../../components/ListItemAppLink';

function Contents(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      <ListItemAppLink to="/" button selected={pathname === withPrefix('/')} role="menuitem">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemAppLink>
      <ListItemAppLink to="/page-2/" button selected={pathname === withPrefix('/page-2/')} role="menuitem">
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Page-2" />
      </ListItemAppLink>
    </List>
  );
}

export default Contents;
