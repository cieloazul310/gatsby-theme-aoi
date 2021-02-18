import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface StyleProps {
  tabSticky: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      position: ({ tabSticky }) => (tabSticky ? 'sticky' : undefined),
      top: ({ tabSticky }) => (tabSticky ? 56 : undefined),
      backgroundColor: ({ tabSticky }) => (tabSticky ? theme.palette.background.default : undefined),
      zIndex: ({ tabSticky }) => (tabSticky ? theme.zIndex.mobileStepper : undefined),
      boxShadow: ({ tabSticky }) => (tabSticky ? theme.shadows[1] : undefined),
      [theme.breakpoints.up('sm')]: {
        top: ({ tabSticky }) => (tabSticky ? 64 : undefined),
      },
    },
  })
);

interface Props {
  children: React.ReactNode;
  tabSticky?: boolean;
}

function Tabs({ children, tabSticky = false }: Props): JSX.Element {
  const classes = useStyles({ tabSticky });
  return (
    <div className={classes.root}>
      <nav>{children}</nav>
    </div>
  );
}

export default Tabs;
