import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Socials from './Socials';
import Copyrights from './Copyrights';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
    },
  })
);

function Footer(): JSX.Element {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.root}>
        <Socials />
        <Copyrights />
      </div>
    </footer>
  );
}

export default Footer;
