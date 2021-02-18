import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 240,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.grey[500],
    },
    container: {
      height: 240,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      color: theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.common.black,
    },
  })
);

interface Props {
  title: string;
}

function Jumbotron({ title }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Typography className={classes.title} variant="h4" component="h2">
          {title}
        </Typography>
      </Container>
    </div>
  );
}

export default Jumbotron;
