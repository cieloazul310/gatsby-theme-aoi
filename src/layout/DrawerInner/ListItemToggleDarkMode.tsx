import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import useTheme from '@material-ui/core/styles/useTheme';
import Bright4Icon from '@material-ui/icons/Brightness4';
import Bright5Icon from '@material-ui/icons/Brightness5';
import { useToggleDark } from '../../utils/DispatchContext';

function ListItemToggleDarkMode() {
  const paletteType = useTheme().palette.type;
  const isDark = React.useMemo(() => paletteType === 'dark', [paletteType]);
  const _toggleDark = useToggleDark();
  return (
    <ListItem>
      <ListItemIcon>{isDark ? <Bright4Icon /> : <Bright5Icon />}</ListItemIcon>
      <ListItemText primary="ダークモード" />
      <ListItemSecondaryAction>
        <Switch edge="end" onChange={_toggleDark} checked={isDark} inputProps={{ 'aria-labelledby': 'switch-list-label-darkmode' }} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ListItemToggleDarkMode;
