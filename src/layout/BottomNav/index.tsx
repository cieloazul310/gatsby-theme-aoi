import * as React from 'react';
import { withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { useLocation } from '@reach/router';
import BottomNavItem from './BottomNavItem';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  })
);

function BottomNav(): JSX.Element {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} value={pathname.replace(withPrefix('/'), '/')} showLabels>
      <BottomNavItem label="Top" value="/" icon={<Home />} />
      <BottomNavItem label="Page2" value="/page-2/" icon={<MusicNote />} />
    </BottomNavigation>
  );
}

export default BottomNav;
