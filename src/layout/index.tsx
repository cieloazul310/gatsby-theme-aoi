import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';

import { useAppState } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';
import { useThemeContextState } from 'gatsby-theme-aoi-top-layout/src/utils/ThemeStateContext';

// layout components are enable to override from your project
// https://www.gatsbyjs.org/docs/themes/shadowing/
import SEO from './SEO';
import Header from './Header';
import Tabs from './Tabs';
import DrawerInner from './DrawerInner';
import Footer from './Footer';
import Fab from './Fab';
import BottomNav from './BottomNav';
import {
  mergeViewports,
  mainStyles,
  permanentDrawerStyles,
  fabStyles,
  viewportsToSxDisplay,
  ComponentViewports,
} from '../utils/layoutViewports';

/**
 * TODO: enable to change breakpoints via props
 * default layout and breakpoints
 * Header ['xs', 'sm', 'md', 'lg', 'xl']
 * TemporaryDrawer "smDown"
 * PermanentDrawer "mdUp"
 * BottomNav "xsDown"
 * Fav "smDown"
 *
 * from props
 */
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  loading?: boolean;
  componentViewports?: Partial<ComponentViewports>;
  drawerWidth?: number;
  tabSticky?: boolean;
  drawerContents?: React.ReactNode;
  tabs?: React.ReactNode;
  bottomNavigation?: React.ReactNode;
  fab?: React.ReactNode;
}

function Layout({
  children,
  title,
  description,
  keywords,
  image,
  tabs,
  drawerContents,
  bottomNavigation,
  fab,
  componentViewports,
  tabSticky = false,
  loading = false,
  drawerWidth = 280,
}: LayoutProps): JSX.Element {
  const theme = useTheme();
  const appState = useAppState();
  const themeState = useThemeContextState();
  console.log(appState, themeState);

  const viewports = mergeViewports(componentViewports);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);
  const handleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = React.useMemo(
    () => (
      <Box
        component="nav"
        sx={{
          ...permanentDrawerStyles(viewports.PermanentDrawer, drawerWidth),
          flexShrink: 0,
        }}
      >
        {viewports.SwipeableDrawer !== false ? (
          <SwipeableDrawer
            sx={{
              display: viewportsToSxDisplay(viewports.SwipeableDrawer),
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            variant="temporary"
            onOpen={handleDrawer(true)}
            onClose={handleDrawer(false)}
            open={drawerOpen}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <DrawerInner handleDrawer={toggleDrawer} contents={drawerContents} title={title} />
          </SwipeableDrawer>
        ) : null}
        {viewports.PermanentDrawer !== false ? (
          <Drawer
            sx={{
              display: viewportsToSxDisplay(viewports.PermanentDrawer),
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            variant="permanent"
            open
          >
            <DrawerInner handleDrawer={toggleDrawer} contents={drawerContents} title={title} />
          </Drawer>
        ) : null}
      </Box>
    ),
    [toggleDrawer, drawerOpen, drawerContents, title, viewports]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
      }}
    >
      <SEO title={title} description={description} keywords={keywords} image={image} />
      {loading ? (
        <LinearProgress
          sx={{
            position: 'fixed',
            top: { xs: theme.mixins.toolbar.minHeight, sm: 64 },
            left: 0,
            width: '100%',
            zIndex: theme.zIndex.drawer + 1,
          }}
          color="secondary"
        />
      ) : null}
      <AppBar
        sx={{
          zIndex: theme.zIndex.drawer + 2,
          width: '100%',
        }}
      >
        <Header title={title} toggleDrawer={toggleDrawer} componentViewports={viewports} />
      </AppBar>
      {viewports.SwipeableDrawer || viewports.PermanentDrawer ? drawer : null}
      <Box
        sx={{
          ...mainStyles(viewports.BottomNav),
          flexGrow: 1,
          maxWidth: '100%',
          minWidth: 0,
          paddingTop: { xs: '56px', sm: '64px' },
        }}
      >
        {tabs ? <Tabs tabSticky={tabSticky}>{tabs}</Tabs> : null}
        <main>{children}</main>
        <Footer />
      </Box>
      {viewports.Fab !== false ? (
        <Box
          sx={{
            ...fabStyles(viewports.BottomNav, theme),
            display: viewportsToSxDisplay(viewports.Fab),
            position: 'fixed',
            right: theme.spacing(2),
            bottom: theme.spacing(2),
            transition: theme.transitions.create('bottom'),
          }}
        >
          {fab || <Fab onClick={toggleDrawer} />}
        </Box>
      ) : null}
      {viewports.BottomNav !== false ? (
        <Box
          sx={{
            display: viewportsToSxDisplay(viewports.BottomNav),
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
          }}
        >
          {bottomNavigation || <BottomNav />}
        </Box>
      ) : null}
    </Box>
  );
}

export default Layout;
