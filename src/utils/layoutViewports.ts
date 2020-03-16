import { Theme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { HiddenProps } from '@material-ui/core/Hidden';

const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

//type HiddenPropsKeys = keyof HiddenProps;
//type Viewport = Exclude<HiddenPropsKeys, ('implementation' | 'initialWidth' | 'only')>;
type Viewport = 'xsDown' | 'xsUp' | 'smDown' | 'smUp' | 'mdDown' | 'mdUp' | 'lgDown' | 'lgUp' | 'xlDown' | 'xlUp';
type ViewDirection = 'Up' | 'Down';
type Viewports = Viewport | boolean;

export interface ComponentViewports {
  SwipeableDrawer: Viewports;
  PermanentDrawer: Viewports;
  BottomNav: Viewports;
  Fab: Viewports;
}

export const defaultComponentViewports: ComponentViewports = {
  SwipeableDrawer: 'smDown',
  PermanentDrawer: 'mdUp',
  BottomNav: 'xsDown',
  Fab: 'smDown'
};

/**
 * usage
 * <Hidden {...viewportsToHidden(componentViewPorts))}>
 *  {component}
 * </Hidden>
 */

export function viewportsToHidden(viewports: Viewports): HiddenProps {
  if (viewports === true) return null;
  if (viewports === false) return { xsUp: true };
  const breakpoint: Breakpoint = breakpointSlicer(viewports);
  const direction: ViewDirection = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'Up') {
    return { [checkIsViewport(`${breakpoints[index - 1]}Down`)]: true };
  } else {
    return { [checkIsViewport(`${breakpoints[index + 1]}Up`)]: true };
  }
}

/**
 * usage:
 * drawer: props =>
 *  permanentDrawerStyle(viewports.PermanentDrawer)(theme, drawerWidth)
 *
 */

export function headerStyles(permanentDrawerViewports: Viewports) {
  if (permanentDrawerViewports === true)
    return (theme: Theme, drawerWidth: number, styles: any = {}) => ({
      ...styles,
      width: `calc(100% - ${drawerWidth}px)`
    });
  if (permanentDrawerViewports === false)
    return (theme: Theme, drawerWidth: number, styles: any = {}) => ({
      ...styles,
      width: '100%'
    });

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return (theme: Theme, drawerWidth: number, styles: any = {}) => ({
    ...styles,
    width: '100%',
    [theme.breakpoints[direction](breakpoint)]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  });
}

export function permanentDrawerStyles(permanentDrawerViewports: Viewports) {
  // ex. "mdUp"
  if (permanentDrawerViewports === true)
    return (theme: Theme, width: number, styles: any = {}) => ({
      ...styles,
      width: width
    });
  if (permanentDrawerViewports === false)
    return (theme: Theme, width: number, styles: any = {}) => ({
      ...styles,
      width: 0
    });

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return (theme: Theme, width: number, styles: any = {}) => ({
    ...styles,
    [theme.breakpoints[direction](breakpoint)]: {
      width: width
    }
  });
}

export function mainStyles({ PermanentDrawer, BottomNav }: ComponentViewports) {
  // ex. "xsDown"
  const BottomNavStyle = () => {
    if (BottomNav === true)
      return (theme: Theme, styles: any = {}) => ({
        ...styles,
        paddingBottom: 56
      });
    if (BottomNav === false) return (theme: Theme, styles: any = {}) => styles;

    const breakpoint: Breakpoint = breakpointSlicer(BottomNav);
    const direction = directionSlicer(BottomNav) === 'Up' ? 'up' : 'down';

    return (theme: Theme, styles: any = {}) => ({
      ...styles,
      [theme.breakpoints[direction](breakpoint)]: {
        paddingBottom: 56
      }
    });
  };
  return (theme: Theme, drawerWidth: number, styles: any = {}) => {
    return {
      ...styles,
      ...BottomNavStyle()(theme),
      ...headerStyles(PermanentDrawer)(theme, drawerWidth)
    };
  }
}

export function fabStyles(bottomNavViewports: Viewports) {
  // ex. "xsDown"
  if (bottomNavViewports === true)
    return (theme: Theme, styles: any = {}) => ({
      ...styles,
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`
    });
  if (bottomNavViewports === false) return (theme: Theme, styles: any = {}) => styles;

  const breakpoint: Breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';

  return (theme: Theme, styles: any = {}) => ({
    ...styles,
    [theme.breakpoints[direction](breakpoint)]: {
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`
    }
  });
}

function breakpointSlicer(viewports: Viewport): Breakpoint {
  const breakpoint = viewports.slice(0, 2);
  return breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'
    ? breakpoint
    : null;
}
function directionSlicer(viewports: Viewport): ViewDirection {
  const direction = viewports.slice(2);
  return direction === 'Up' || direction === 'Down' ? direction : null;
}

function checkIsViewport(str: string): Viewport {
  return str === 'xsDown' ||
    str === 'xsUp' ||
    str === 'smDown' ||
    str === 'smUp' ||
    str === 'mdDown' ||
    str === 'mdUp' ||
    str === 'lgUp' ||
    str === 'lgDown' ||
    str === 'xlUp' ||
    str === 'xlDown'
    ? str
    : null;
}
