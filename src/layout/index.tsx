import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LinearProgress from '@material-ui/core/LinearProgress';

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
  viewportsToHidden,
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

interface StylesProps {
  drawerWidth: number;
  viewports: ComponentViewports;
}

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    header: {
      zIndex: theme.zIndex.drawer + 2,
      width: '100%',
    },
    progress: {
      position: 'fixed',
      top: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up('sm')]: {
        top: 64,
      },
      left: 0,
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: ({ viewports, drawerWidth }) => ({
      ...permanentDrawerStyles(viewports.PermanentDrawer, theme, drawerWidth),
      flexShrink: 0,
    }),
    drawerPaper: {
      width: ({ drawerWidth }) => drawerWidth,
    },
    main: ({ viewports }) => ({
      ...mainStyles(viewports.BottomNav, theme),
      flexGrow: 1,
      maxWidth: '100%',
      minWidth: 0,
      paddingTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
    }),
    menuFab: ({ viewports }) => ({
      ...fabStyles(viewports.BottomNav, theme),
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      transition: theme.transitions.create('bottom'),
    }),
    bottomNav: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
  })
);

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
  const viewports = mergeViewports(componentViewports);
  const classes = useStyles({ viewports, drawerWidth });
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);
  const handleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = React.useMemo(
    () => (
      <nav className={classes.drawer}>
        {viewports.SwipeableDrawer !== false ? (
          <Hidden {...viewportsToHidden(viewports.SwipeableDrawer)} implementation="css">
            <SwipeableDrawer
              classes={{ paper: classes.drawerPaper }}
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
          </Hidden>
        ) : null}
        {viewports.PermanentDrawer !== false ? (
          <Hidden {...viewportsToHidden(viewports.PermanentDrawer)} implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <DrawerInner handleDrawer={toggleDrawer} contents={drawerContents} title={title} />
            </Drawer>
          </Hidden>
        ) : null}
      </nav>
    ),
    [classes, toggleDrawer, drawerOpen, drawerContents, title, viewports]
  );

  return (
    <div className={classes.root}>
      <SEO title={title} description={description} keywords={keywords} image={image} />
      {loading ? <LinearProgress className={classes.progress} color="secondary" /> : null}
      <Header className={classes.header} title={title} toggleDrawer={toggleDrawer} componentViewports={viewports} />
      {viewports.SwipeableDrawer || viewports.PermanentDrawer ? drawer : null}
      <div className={classes.main}>
        {tabs ? <Tabs tabSticky={tabSticky}>{tabs}</Tabs> : null}
        <main>{children}</main>
        <Footer />
      </div>
      {viewports.Fab !== false ? (
        <Hidden {...viewportsToHidden(viewports.Fab)} implementation="css">
          <div className={classes.menuFab}>{fab || <Fab onClick={toggleDrawer} />}</div>
        </Hidden>
      ) : null}
      {viewports.BottomNav !== false ? (
        <Hidden {...viewportsToHidden(viewports.BottomNav)} implementation="css">
          <div className={classes.bottomNav}>{bottomNavigation || <BottomNav />}</div>
        </Hidden>
      ) : null}
    </div>
  );
}

export default Layout;
