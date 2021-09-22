import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemToggleDarkMode, { ListItemToggleUseSystemTheme } from '../../components/ListItemToggleDarkMode';
import { useSiteMetadata } from '../../graphql-hooks';

function StateHandler(): JSX.Element {
  const { lang } = useSiteMetadata();
  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItemToggleDarkMode label={lang === 'ja' ? 'ダークモード' : 'Dark Mode'} />
      <ListItemToggleUseSystemTheme label={lang === 'ja' ? '自動ダークモード' : 'Auto Dark Mode'} />
    </List>
  );
}

export default StateHandler;
