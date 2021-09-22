import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import BottomNavigationAction, { BottomNavigationActionProps } from '@mui/material/BottomNavigationAction';

function BottomNavItem({ label, value, icon, showLabel }: BottomNavigationActionProps): JSX.Element {
  return <BottomNavigationAction label={label} component={GatsbyLink} to={value} icon={icon} showLabel={showLabel} />;
}

export default BottomNavItem;
