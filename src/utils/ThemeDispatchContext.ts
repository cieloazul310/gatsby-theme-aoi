import * as React from 'react';
import { initialThemeState, ThemeState, ThemeAction } from './themeReducer';

type Context = { state: ThemeState; dispatch: React.Dispatch<ThemeAction> };
export const ThemeDispatchContext = React.createContext<Context>({
  state: initialThemeState(),
  dispatch: () => {
    throw new Error();
  }
});

// Context Hooks
export function useThemeContextState() {
  const { state } = React.useContext(ThemeDispatchContext);
  return state;
}
export function useToggleDark() {
  const { dispatch } = React.useContext(ThemeDispatchContext);
  return React.useCallback(() => {
    dispatch({ type: 'TOGGLE_DARKMODE' });
  }, [dispatch]);
}
export function useToggleUseSystem() {
  const { dispatch } = React.useContext(ThemeDispatchContext);
  return React.useCallback(() => {
    dispatch({ type: 'TOGGLE_USE_SYSTEM_THEME' });
  }, [dispatch]);
}
