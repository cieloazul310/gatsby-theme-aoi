import * as React from 'react';
import { Link as GatsbyLink, withPrefix } from 'gatsby';
import BottomNavigationAction, { BottomNavigationActionProps } from '@material-ui/core/BottomNavigationAction';

type Props = BottomNavigationActionProps;

function BottomNavItem({ label, value, icon, showLabel, selected, ...props }: Props): JSX.Element {
  console.log(props);
  return <BottomNavigationAction label={label} component={GatsbyLink} to={value} icon={icon} selected={selected} showLabel={showLabel} />;
}

export default BottomNavItem;
