import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useSiteMetadata } from '../../graphql-hooks';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';

interface StylesProps {
  //drawerWidth: number;
}

const useStyles = makeStyles<Theme/*, StylesProps*/>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === 'dark' ? '#222' : null,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : null,
      /*
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`
      }*/
    },
    title: {
      lineHeight: 1.2,
      display: 'flex',
      justifyContent: 'start',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }
    }
  })
);

interface Props {
  className: string;
  title: string;
  toggleDrawer?: () => any;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  drawerWidth?: number;
}

function Header({ className, title, onLeftButtonClick, onRightButtonClick, drawerWidth = 280 }: Props) {
  const classes = useStyles(/*{ drawerWidth }*/);
  const siteMetadata = useSiteMetadata();
  return (
    <AppBar className={clsx(className, classes.root)}>
      <Toolbar>
        <ButtonLeft onButtonClick={onLeftButtonClick} />
        <Box flex="1" px={1}>
          <Typography className={classes.title} variant="h6" component="h1" color="inherit">
            {title || siteMetadata.title}
          </Typography>
        </Box>
        <ButtonRight title={title} onButtonClick={onRightButtonClick} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
