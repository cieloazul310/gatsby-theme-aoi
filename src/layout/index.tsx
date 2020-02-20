import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';

import Header from './Header';
import DrawerInner from './DrawerInner';
import Socials from './Socials';
import { LayoutQuery } from '../../graphql-types';

interface StylesProps {
  useBottomNav: boolean;
  drawerWidth: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => drawerWidth,
      },
    },
    drawerPaper: {
      transition: theme.transitions.create('background'),
      width: ({ drawerWidth }) => drawerWidth,
    },
    main: {
      width: '100%',
      paddingTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.down('xs')]: {
        paddingBottom: ({ useBottomNav }) => (useBottomNav ? 56 : null),
      },
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      },
      ['@media (min-width:600px)']: {
        paddingTop: 64,
      },
    },
    footer: {
      textAlign: 'center',
    },
    menuFab: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        bottom: ({ useBottomNav }) => (useBottomNav ? `calc(${theme.spacing(2)}px + 56px)` : null),
      },
    },
  })
);

interface Props extends ContainerProps {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
  disablePaddingTop?: boolean;
  drawerWidth?: number;
  drawerContents?: JSX.Element[];
  bottomNavigation?: JSX.Element[];
}

function Layout({
  children,
  title,
  description,
  drawerContents,
  disablePaddingTop,
  bottomNavigation,
  drawerWidth = 280,
  ...options
}: Props) {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          lang
          description
          author
        }
      }
    }
  `);
  const classes = useStyles({
    drawerWidth,
    useBottomNav: bottomNavigation !== undefined,
  });
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const _toggleDrawer = () => {
    toggleDrawer(!drawerOpen);
  };
  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <div className={classes.root}>
      <Helmet
        htmlAttributes={{ lang: data.site.siteMetadata.lang || 'en' }}
        title={title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          { name: 'keywords', content: 'sample, something' },
          { name: 'twitter:card', content: 'summary' },
          {
            name: 'twitter:title',
            content: title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
        ]}
      ></Helmet>
      <Header title={title || data.site.siteMetadata.title} toggleDrawer={_toggleDrawer} drawerWidth={drawerWidth} />
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            onOpen={_toggleDrawer}
            onClose={_toggleDrawer}
            open={drawerOpen}
          >
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.main}>
        <Container {...options}>
          <Box pt={disablePaddingTop ? 0 : 4} pb={4}>
            <main>{children}</main>
            <footer>
              <div className={classes.footer}>
                <Socials />
                <Typography variant="body2" component="small">
                  © {new Date().getFullYear()} {data.site.siteMetadata.author} All rights reserved. Built with
                  {` `}
                  <Link color="secondary" href="https://www.gatsbyjs.org">
                    Gatsby
                  </Link>
                </Typography>
              </div>
            </footer>
          </Box>
        </Container>
        <Hidden mdUp implementation="css">
          <Tooltip title="Menu" placement="top">
            <Fab className={classes.menuFab} onClick={_toggleDrawer} color="secondary">
              <MenuIcon />
            </Fab>
          </Tooltip>
        </Hidden>
      </div>
      {bottomNavigation ? (
        <Hidden smUp implementation="css">
          {bottomNavigation}
        </Hidden>
      ) : null}
    </div>
  );
}

export default Layout;
