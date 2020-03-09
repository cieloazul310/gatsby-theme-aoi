import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

// layout components are enable to override from your project
// https://www.gatsbyjs.org/docs/themes/shadowing/
import SEO from './SEO';
import Header from './Header';
import Tabs from './Tabs';
import DrawerInner from './DrawerInner';
import Footer from './Footer';
import Fab from './Fab';
import BottomNav from './BottomNav';

/**
 * TODO: enable to change breakpoints via props
 * default layout and breakpoints
 * xs: Header, Drawer(Swipeable), BottomNav, Fab
 * sm: Header, Drawer(Swipeable), Fab
 * md: Header, Drawer(Permanent)
 * lg: Header, Drawer(Permanent)
 * xl: Header, Drawer(Permanent)
 *
 * from props
 */

interface StylesProps {
  disableBottomNav: boolean;
  drawerWidth: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) =>
  createStyles({
    drawer: {
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => drawerWidth,
      },
    },
    drawerPaper: {
      transition: theme.transitions.create(['background', 'width']),
      width: ({ drawerWidth }) => drawerWidth,
    },
    main: {
      flex: 1,
      paddingTop: theme.mixins.toolbar.minHeight,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.down('xs')]: {
        paddingBottom: ({ disableBottomNav }) => (!disableBottomNav ? 56 : null),
      },
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
    },
    menuFab: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      transition: theme.transitions.create(['bottom', 'right']),
      [theme.breakpoints.down('xs')]: {
        bottom: ({ disableBottomNav }) => (!disableBottomNav ? `calc(${theme.spacing(2)}px + 56px)` : null),
      },
    },
  })
);

export interface LayoutProps extends ContainerProps {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  title?: string;
  description?: string;
  keywords?: string[];
  disablePaddingTop?: boolean;
  disableDrawer?: boolean;
  disableFab?: boolean;
  disableBottomNav?: boolean;
  drawerWidth?: number;
  tabSticky?: boolean;
  drawerContents?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  tabs?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  bottomNavigation?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  fab?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}

function Layout({
  children,
  title,
  description,
  keywords,
  tabs,
  drawerContents,
  disablePaddingTop,
  bottomNavigation,
  fab,
  tabSticky = false,
  disableDrawer = false,
  disableFab = false,
  disableBottomNav = false,
  drawerWidth = 280,
  ...options
}: LayoutProps) {
  const classes = useStyles({
    disableBottomNav,
    drawerWidth: disableDrawer ? 0 : drawerWidth,
  });
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const _toggleDrawer = React.useCallback(() => {
    toggleDrawer(!drawerOpen);
  }, [drawerOpen]);

  const drawer = React.useMemo(
    () => (
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            onOpen={_toggleDrawer}
            onClose={_toggleDrawer}
            open={drawerOpen}
          >
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
          </Drawer>
        </Hidden>
      </nav>
    ),
    [classes, _toggleDrawer, drawerOpen, drawerContents, title]
  );

  return (
    <Box display="flex">
      <SEO title={title} description={description} keywords={keywords} />
      <Header title={title} drawerWidth={disableDrawer ? 0 : drawerWidth} />
      {!disableDrawer ? drawer : null}
      <Box className={classes.main}>
        <Container {...options}>
          <Box pt={disablePaddingTop ? 0 : 4} pb={4}>
            {tabs ? <Tabs tabSticky={tabSticky}>{tabs}</Tabs> : null}
            <main>{children}</main>
            <Footer />
          </Box>
        </Container>
        {!disableFab ? (
          <Hidden mdUp implementation="css">
            <Box className={classes.menuFab}>{fab || <Fab onClick={_toggleDrawer} />}</Box>
          </Hidden>
        ) : null}
      </Box>
      {!disableBottomNav ? (
        <Hidden smUp implementation="css">
          {bottomNavigation || <BottomNav />}
        </Hidden>
      ) : null}
    </Box>
  );
}

export default Layout;
