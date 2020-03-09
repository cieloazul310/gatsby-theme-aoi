import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { useLocation } from '@reach/router';

function BottomNav() {
  const { pathname } = useLocation();
  const _onChange = (event: React.ChangeEvent, value: string) => {
    navigate(value);
  };
  return (
    <Box position="fixed" bottom={0} left={0} width="100%">
      <BottomNavigation value={pathname} showLabels onChange={_onChange}>
        <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<Home />} />
        <BottomNavigationAction label="page2" value={withPrefix('/page-2/')} icon={<MusicNote />} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNav;
