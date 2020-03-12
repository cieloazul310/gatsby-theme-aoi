import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme, lighten } from '@material-ui/core/styles';
import { ThemeDispatchContext } from '../utils/ThemeDispatchContext';
import initialMuiTheme from '../utils/theme';
import { themeReducer } from '../utils/themeReducer';
import useLocalStorage from '../utils/useLocalStorage';
import AppStateContext from '../utils/AppStateContext';
import reducer from '../utils/reducer';
import { initialAppState } from '../utils/AppState';

/**
 * TODO:
 * 1. Do localStorage have ['paletteType', 'useSystemTheme'] ?
 * 2. Do your system like dark mode?
 * 3. initial value ( 'light', false )
 * localStorage > prefersDarkMode > initialValue
 */
export default function TopLayout(props) {
  // 'light' | 'dark' (PaletteType)
  const [storedPaletteType, setPaletteType] = useLocalStorage('paletteType');
  // boolean useSystemTheme
  const [storedUseSystemTheme, setUseSystemTheme] = useLocalStorage('useSystemTheme');
  // boolean
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // Theme State
  const [themeState, themeDispatch] = React.useReducer(themeReducer, {
    darkMode: storedPaletteType ? storedPaletteType === 'dark' : false,
    useSystemTheme: storedUseSystemTheme || false
  });
  const { darkMode, useSystemTheme } = themeState;
  const paletteType = useSystemTheme ? (prefersDarkMode ? 'dark' : 'light') : darkMode ? 'dark' : 'light';

  // persist paletteType
  React.useEffect(() => {
    setPaletteType(darkMode ? 'dark' : 'light');
  }, [darkMode]);
  React.useEffect(() => {
    setUseSystemTheme(useSystemTheme);
  }, [useSystemTheme]);

  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialMuiTheme,
      palette: {
        primary: {
          main: paletteType === 'dark' ? lighten(initialMuiTheme.palette.primary.main, 0.4) : initialMuiTheme.palette.primary.main
        },
        secondary: {
          main: paletteType === 'dark' ? lighten(initialMuiTheme.palette.secondary.main, 0.4) : initialMuiTheme.palette.secondary.main
        },
        type: paletteType
      }
    });
  }, [paletteType]);
  const [state, dispatch] = React.useReducer(reducer, initialAppState);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ThemeDispatchContext.Provider value={{ state: themeState, dispatch: themeDispatch }}>
          <AppStateContext.Provider value={{ state, dispatch }}>{props.children}</AppStateContext.Provider>
        </ThemeDispatchContext.Provider>
      </ThemeProvider>
    </>
  );
}
