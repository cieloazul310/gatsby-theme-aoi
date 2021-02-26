import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface StylesProps {
  bgImage?: string;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      height: 240,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.grey[700],
    },
    bgImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: ({ bgImage }) => (bgImage ? `url(${bgImage}) center / cover` : undefined),
      filter: 'blur(4px) brightness(0.9)',
      transform: 'scale(1.1)',
    },
    container: {
      height: 240,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1,
      color: ({ bgImage }) => {
        if (bgImage || theme.palette.type === 'dark') return theme.palette.common.white;
        return theme.palette.getContrastText(theme.palette.secondary.light);
      },
      textShadow: ({ bgImage }) => (bgImage ? '0 0 4px rgba(0, 0, 0, 0.6)' : undefined),
    },
  })
);

interface Props {
  title: string;
  bgImage?: string;
}

function Jumbotron({ title, bgImage }: Props): JSX.Element {
  const classes = useStyles({ bgImage });
  return (
    <div className={classes.root}>
      {bgImage ? <div className={classes.bgImage} /> : null}
      <Container className={classes.container} maxWidth="sm">
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
      </Container>
    </div>
  );
}

Jumbotron.defaultProps = {
  bgImage: undefined,
};

export default Jumbotron;
