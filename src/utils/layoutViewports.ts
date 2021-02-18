import { Theme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { HiddenProps } from '@material-ui/core/Hidden';
import { CSSProperties, CreateCSSProperties } from '@material-ui/core/styles/withStyles';

const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export type Viewport = 'xsDown' | 'xsUp' | 'smDown' | 'smUp' | 'mdDown' | 'mdUp' | 'lgDown' | 'lgUp' | 'xlDown' | 'xlUp';
export type ViewDirection = 'Up' | 'Down';
export type Viewports = Viewport | boolean;

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
  Fab: 'smDown',
};

function isBreakpoint(breakpoint: string | Breakpoint): breakpoint is Breakpoint {
  return breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl';
}

function breakpointSlicer(viewports: Viewport): Breakpoint {
  const breakpoint = viewports.slice(0, 2);
  if (!isBreakpoint(breakpoint)) throw new Error();
  return breakpoint;
}

function isDirection(direction: string | ViewDirection): direction is ViewDirection {
  return direction === 'Up' || direction === 'Down';
}

function directionSlicer(viewports: Viewport): ViewDirection {
  const direction = viewports.slice(2);
  if (!isDirection(direction)) throw new Error();
  return direction;
}

function isViewport(viewport: string | Viewport): viewport is Viewport {
  return (
    viewport === 'xsDown' ||
    viewport === 'xsUp' ||
    viewport === 'smDown' ||
    viewport === 'smUp' ||
    viewport === 'mdDown' ||
    viewport === 'mdUp' ||
    viewport === 'lgUp' ||
    viewport === 'lgDown' ||
    viewport === 'xlUp' ||
    viewport === 'xlDown'
  );
}

function checkIsViewport(str: string): Viewport {
  if (!isViewport(str)) throw new Error();
  return str;
}

export function viewportsHelper(componentViewPorts: Partial<ComponentViewports>): Partial<ComponentViewports> {
  return componentViewPorts;
}

export function mergeViewports(componentViewports: Partial<ComponentViewports> | undefined): ComponentViewports {
  return componentViewports
    ? {
        SwipeableDrawer: componentViewports.SwipeableDrawer ?? defaultComponentViewports.SwipeableDrawer,
        PermanentDrawer: componentViewports.PermanentDrawer ?? defaultComponentViewports.PermanentDrawer,
        BottomNav: componentViewports.BottomNav ?? defaultComponentViewports.BottomNav,
        Fab: componentViewports.Fab ?? defaultComponentViewports.Fab,
      }
    : defaultComponentViewports;
}

/**
 * usage
 * <Hidden {...viewportsToHidden(componentViewPorts))}>
 *  {component}
 * </Hidden>
 */

export function viewportsToHidden(viewports: Viewports): HiddenProps {
  if (viewports === true || viewports === 'xsUp' || viewports === 'xlDown') return {};
  if (viewports === false) return { xsUp: true };
  const breakpoint: Breakpoint = breakpointSlicer(viewports);
  const direction: ViewDirection = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'Up') {
    return { [checkIsViewport(`${breakpoints[index - 1]}Down`)]: true };
  }
  return { [checkIsViewport(`${breakpoints[index + 1]}Up`)]: true };
}

/**
 * usage:
 * drawer: props =>
 *  permanentDrawerStyle(viewports.PermanentDrawer)(theme, drawerWidth)
 *
 */

export function contentWidthStyles(
  permanentDrawerViewports: Viewports,
  theme: Theme,
  drawerWidth: number
): CSSProperties | CreateCSSProperties<StylesProps> {
  if (permanentDrawerViewports === true || permanentDrawerViewports === 'xlDown' || permanentDrawerViewports === 'xsUp')
    return {
      width: `calc(100% - ${drawerWidth}px)`,
    };
  if (permanentDrawerViewports === false)
    return {
      width: '100%',
    };

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return {
    width: '100%',
    [theme.breakpoints[direction](breakpoint)]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  };
}

interface StylesProps {
  drawerWidth: number;
  viewports: ComponentViewports;
}

export function permanentDrawerStyles(
  permanentDrawerViewports: Viewports,
  theme: Theme,
  drawerWidth: number
): CSSProperties | CreateCSSProperties<StylesProps> {
  // ex. "mdUp"
  if (permanentDrawerViewports === true || permanentDrawerViewports === 'xlDown' || permanentDrawerViewports === 'xsUp')
    return {
      width: drawerWidth,
    };
  if (permanentDrawerViewports === false)
    return {
      width: 0,
    };

  const breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return {
    [theme.breakpoints[direction](breakpoint)]: {
      width: drawerWidth,
    },
  };
}

export function mainStyles(bottomNavViewports: Viewports, theme: Theme): CSSProperties | CreateCSSProperties<StylesProps> {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      paddingBottom: 56,
    };
  if (bottomNavViewports === false) return {};

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';

  return {
    [theme.breakpoints[direction](breakpoint)]: {
      paddingBottom: 56,
    },
  };
}

export function fabStyles(bottomNavViewports: Viewports, theme: Theme): CSSProperties | CreateCSSProperties<StylesProps> {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`,
    };
  if (bottomNavViewports === false) return {};

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';

  return {
    [theme.breakpoints[direction](breakpoint)]: {
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`,
    },
  };
}
