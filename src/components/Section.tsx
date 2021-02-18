import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    divider: {
      padding: theme.spacing(1, 0),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function Section({ children }: Props): JSX.Element {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

export default Section;

export function SectionDivider(): JSX.Element {
  const classes = useStyles();
  return <div className={classes.divider} />;
}
