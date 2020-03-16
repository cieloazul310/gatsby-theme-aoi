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
import {
  defaultComponentViewports,
  headerStyles,
  permanentDrawerStyles,
  mainStyles,
  fabStyles,
  viewportsToHidden,
  ComponentViewports
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

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) => {
  return createStyles({
    header: ({ viewports, drawerWidth }) => headerStyles(viewports.PermanentDrawer)(theme, drawerWidth),
    drawer: ({ viewports, drawerWidth }) => permanentDrawerStyles(viewports.PermanentDrawer)(theme, drawerWidth),
    drawerPaper: {
      width: ({ drawerWidth }) => drawerWidth
    },
    main: ({ viewports, drawerWidth }) =>
      mainStyles(viewports)(theme, drawerWidth, {
        flex: 1,
        maxWidth: '100%',
        paddingTop: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.up('sm')]: {
          paddingTop: 64
        }
      }),
    menuFab: ({ viewports }) =>
      fabStyles(viewports.BottomNav)(theme, {
        position: 'fixed',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
        transition: theme.transitions.create('bottom')
      })
  });
});

export interface LayoutProps extends ContainerProps {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  disablePaddingTop?: boolean;
  componentViewports?: Partial<ComponentViewports>;
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
  image,
  tabs,
  drawerContents,
  disablePaddingTop,
  bottomNavigation,
  fab,
  componentViewports = defaultComponentViewports,
  tabSticky = false,
  drawerWidth = 280,
  ...options
}: LayoutProps) {
  const viewports = { ...defaultComponentViewports, ...componentViewports };
  const classes = useStyles({ viewports, drawerWidth });
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const _toggleDrawer = React.useCallback(() => {
    toggleDrawer(!drawerOpen);
  }, [drawerOpen]);

  const drawer = React.useMemo(
    () => (
      <nav className={classes.drawer}>
        {viewports.SwipeableDrawer !== false ? (
          <Hidden {...viewportsToHidden(viewports.SwipeableDrawer)} implementation="css">
            <SwipeableDrawer
              classes={{ paper: classes.drawerPaper }}
              variant="temporary"
              onOpen={_toggleDrawer}
              onClose={_toggleDrawer}
              open={drawerOpen}
              ModalProps={{
                keepMounted: true
              }}
            >
              <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
            </SwipeableDrawer>
          </Hidden>
        ) : null}
        {viewports.PermanentDrawer !== false ? (
          <Hidden {...viewportsToHidden(viewports.PermanentDrawer)} implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
            </Drawer>
          </Hidden>
        ) : null}
      </nav>
    ),
    [classes, _toggleDrawer, drawerOpen, drawerContents, title, viewports]
  );

  return (
    <Box display="flex" width="100%" maxWidth="100%">
      <SEO title={title} description={description} keywords={keywords} image={image} />
      <Header className={classes.header} title={title} />
      {viewports.SwipeableDrawer || viewports.PermanentDrawer ? drawer : null}
      <Box className={classes.main}>
        <Container {...options}>
          <Box pt={disablePaddingTop ? 0 : 4} pb={4}>
            {tabs ? <Tabs tabSticky={tabSticky}>{tabs}</Tabs> : null}
            <main>{children}</main>
          </Box>
        </Container>
        <Footer />
        {viewports.Fab !== false ? (
          <Hidden {...viewportsToHidden(viewports.Fab)} implementation="css">
            <Box className={classes.menuFab}>{fab || <Fab onClick={_toggleDrawer} />}</Box>
          </Hidden>
        ) : null}
      </Box>
      {viewports.BottomNav !== false ? (
        <Hidden {...viewportsToHidden(viewports.BottomNav)} implementation="css">
          <Box position="fixed" left={0} bottom={0} width="100%">
            {bottomNavigation || <BottomNav />}
          </Box>
        </Hidden>
      ) : null}
    </Box>
  );
}

export default Layout;
