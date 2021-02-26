import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { ComponentViewports } from '../../utils/layoutViewports';
import { useSiteMetadata } from '../../graphql-hooks';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === 'dark' ? '#222' : undefined,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : undefined,
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(0, 1),
      lineHeight: 1.2,
      display: 'flex',
      justifyContent: 'start',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  })
);

interface Props {
  className: string;
  title?: string;
  componentViewports: ComponentViewports;
  toggleDrawer?: () => void;
}

function Header({
  className,
  title,
  componentViewports,
  toggleDrawer = () => {
    // do nothing
  },
}: Props): JSX.Element {
  const classes = useStyles();
  const siteMetadata = useSiteMetadata();
  return (
    <AppBar className={clsx(className, classes.root)}>
      <Toolbar>
        <ButtonLeft componentViewports={componentViewports} toggleDrawer={toggleDrawer} />
        <Typography className={classes.title} variant="h6" component="h1" color="inherit">
          {title ?? siteMetadata.title}
        </Typography>
        <ButtonRight title={title} />
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  title: undefined,
  toggleDrawer: () => {
    // do nothing
  },
};

export default Header;
