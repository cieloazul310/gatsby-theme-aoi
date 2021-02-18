import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { useLocation } from '@reach/router';

function BottomNav(): JSX.Element {
  const { pathname } = useLocation();
  const onChange = (event: React.ChangeEvent<Record<string, unknown>>, value: string) => {
    navigate(value.replace(withPrefix('/'), '/'));
  };
  return (
    <BottomNavigation value={pathname} onChange={onChange} showLabels>
      <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<Home />} />
      <BottomNavigationAction label="page2" value={withPrefix('/page-2/')} icon={<MusicNote />} />
    </BottomNavigation>
  );
}

export default BottomNav;
