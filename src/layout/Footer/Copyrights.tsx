import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useSiteMetadata } from '../../graphql-hooks';

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      padding: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

function Copyrights(): JSX.Element {
  const classes = useStyles();
  const { title, author } = useSiteMetadata();
  return (
    <div>
      <div className={classes.content}>
        <Typography variant="body1">{title}</Typography>
      </div>
      <div className={classes.content}>
        <Typography variant="body2" component="small">
          © {new Date().getFullYear()} {author} All rights reserved. Built with
          {` `}
          <MuiLink color="secondary" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Gatsby
          </MuiLink>
        </Typography>
      </div>
    </div>
  );
}

export default Copyrights;
