import * as React from 'react';
// import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles((theme) =>
  createStyles({
    emptyButton: {
      padding: theme.spacing(1.5),
    },
    emptyButtonInner: {
      width: 24,
      height: 24,
      marginRight: theme.spacing(-1.5),
    },
  })
);

interface Props {
  title?: string;
}

function ButtonRight({ title }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <Hidden smDown implementation="css">
        <ShareButtons color="inherit" title={title} />
      </Hidden>
      <Hidden mdUp implementation="css">
        <div className={classes.emptyButton}>
          <div className={classes.emptyButtonInner} />
        </div>
      </Hidden>
    </>
  );
}

ButtonRight.defaultProps = {
  title: undefined,
};

export default ButtonRight;
