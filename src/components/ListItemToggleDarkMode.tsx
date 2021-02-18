import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import Bright4Icon from '@material-ui/icons/Brightness4';
import Bright5Icon from '@material-ui/icons/Brightness5';
import { useTheme } from '@material-ui/core/styles';
import { useThemeContextState, useToggleDark, useToggleUseSystem } from 'gatsby-theme-aoi-top-layout/src/utils/ThemeStateContext';
import useUpdateOnClient from '../utils/useUpdateOnClient';

interface Props {
  label?: string;
}

function ListItemToggleDarkMode({ label = 'Dark Mode' }: Props): JSX.Element {
  const isClient = useUpdateOnClient();
  const { darkMode, useSystemTheme } = useThemeContextState();
  const toggleDark = useToggleDark();
  return (
    <ListItem disabled={useSystemTheme}>
      <ListItemIcon key={isClient}>{darkMode ? <Bright4Icon /> : <Bright5Icon />}</ListItemIcon>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        <Switch
          disabled={useSystemTheme}
          key={isClient}
          edge="end"
          onChange={toggleDark}
          checked={darkMode}
          inputProps={{ 'aria-labelledby': 'switch-list-label-darkmode' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ListItemToggleDarkMode.defaultProps = {
  label: 'Dark Mode',
};

export default ListItemToggleDarkMode;

export function ListItemToggleUseSystemTheme({ label = 'Auto Dark Mode' }: Props): JSX.Element {
  const isClient = useUpdateOnClient();
  const paletteType = useTheme().palette.type;
  const { useSystemTheme } = useThemeContextState();
  const toggleUseSystemTheme = useToggleUseSystem();
  return (
    <ListItem>
      <ListItemIcon key={isClient}>
        {paletteType === 'dark' ? (
          <Bright4Icon color={useSystemTheme ? 'inherit' : 'disabled'} />
        ) : (
          <Bright5Icon color={useSystemTheme ? 'inherit' : 'disabled'} />
        )}
      </ListItemIcon>
      <ListItemText primary={label} />
      <ListItemSecondaryAction>
        <Switch
          edge="end"
          key={isClient}
          onChange={toggleUseSystemTheme}
          checked={useSystemTheme}
          inputProps={{ 'aria-labelledby': 'switch-list-label-use-your-system-theme' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ListItemToggleUseSystemTheme.defaultProps = {
  label: 'Auto Dark Mode',
};
