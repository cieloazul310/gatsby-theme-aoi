import * as React from 'react';
// import { navigate, withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { useLocation } from '@reach/router';
import BottomNavItem from './BottomNavItem';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

function BottomNav(): JSX.Element {
  const { pathname } = useLocation();
  const classes = useStyles();
  console.log(pathname);
  /*
  const onChange = (event: React.ChangeEvent<Record<string, unknown>>, value: string) => {
    navigate(value.replace(withPrefix('/'), '/'));
  };
  */
  return (
    <BottomNavigation className={classes.root} value={pathname} showLabels>
      <BottomNavItem label="Top" value="/" icon={<Home />} />
      <BottomNavItem label="Page2" value="/page-2/" icon={<MusicNote />} />
      {/*
        <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<Home />} />
      <BottomNavigationAction label="page2" value={withPrefix('/page-2/')} icon={<MusicNote />} />
      */}
    </BottomNavigation>
  );
}

export default BottomNav;
