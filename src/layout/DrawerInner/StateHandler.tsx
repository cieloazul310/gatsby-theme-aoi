import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemToggleDarkMode, { ListItemToggleUseSystemTheme } from '../../components/ListItemToggleDarkMode';

function StateHandler() {
  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItemToggleDarkMode />
      <ListItemToggleUseSystemTheme />
    </List>
  );
}

export default StateHandler;
