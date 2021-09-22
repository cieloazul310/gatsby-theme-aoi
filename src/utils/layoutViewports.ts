import { Theme, Breakpoint } from '@mui/material/styles';
import { ResponsiveStyleValue, AllSystemCSSProperties, SxProps } from '@mui/system';

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
export function viewportsToSxDisplay(viewports: Viewports): ResponsiveStyleValue<AllSystemCSSProperties['display']> {
  if (viewports === true || viewports === 'xsUp' || viewports === 'xlDown') return 'block';
  if (viewports === false) return 'none';
  const breakpoint: Breakpoint = breakpointSlicer(viewports);
  const direction: ViewDirection = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'Up') return { xs: 'none', [breakpoint]: 'block' };
  return { xs: 'block', [breakpoints[index + 1]]: 'none' };
}

/**
 * usage:
 * drawer: props =>
 *  permanentDrawerStyle(viewports.PermanentDrawer)(theme, drawerWidth)
 *
 */

export function contentWidthStyles(permanentDrawerViewports: Viewports, drawerWidth: number): SxProps {
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
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'down') return { width: { xs: `calc(100% - ${drawerWidth}px)`, [breakpoints[index + 1]]: '100%' } };
  return {
    width: { xs: '100%', [breakpoint]: `calc(100% - ${drawerWidth}px)` },
  };
}

export function permanentDrawerStyles(permanentDrawerViewports: Viewports, drawerWidth: number): SxProps {
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
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'down') return { width: { xs: drawerWidth, [breakpoints[index + 1]]: 0 } };
  return {
    width: { xs: 0, [breakpoint]: drawerWidth },
  };
}

export function mainStyles(bottomNavViewports: Viewports): SxProps {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      paddingBottom: '56px',
    };
  if (bottomNavViewports === false) return {};

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';
  const index = breakpoints.indexOf(breakpoint);

  if (direction === 'down') return {
    paddingBottom: { xs: '56px', [breakpoints[index + 1]]: 0 },
  };
  return {
    paddingBottom: { xs: 0, [breakpoint]: '56px' },
  };
}

export function fabStyles(bottomNavViewports: Viewports, theme: Theme): SxProps {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      paddingBottom: `calc(${theme.spacing(2)} + 56px)`,
    };
  if (bottomNavViewports === false) return {};

  const breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';
  const index = breakpoints.indexOf(breakpoint);
  
  if (direction === 'down') return {
    paddingBottom: { xs: `calc(${theme.spacing(2)} + 56px)`, [breakpoints[index + 1]]: 0 },
  };
  return {
    paddingBottom: { xs: 0, [breakpoint]: `calc(${theme.spacing(2)} + 56px)` },
  };
}
