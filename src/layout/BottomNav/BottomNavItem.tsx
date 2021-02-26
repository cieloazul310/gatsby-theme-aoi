import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import BottomNavigationAction, { BottomNavigationActionProps } from '@material-ui/core/BottomNavigationAction';

type Props = BottomNavigationActionProps;

function BottomNavItem({ label, value, icon, showLabel, selected }: Props): JSX.Element {
  return <BottomNavigationAction label={label} component={GatsbyLink} to={value} icon={icon} selected={selected} showLabel={showLabel} />;
}

export default BottomNavItem;
