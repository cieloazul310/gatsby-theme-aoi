import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useSiteMetadata } from '../../graphql-hooks';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
    },
    title: {
      padding: theme.spacing(0, 2, 2, 2),
    },
    content: {
      padding: theme.spacing(1, 2),
    },
  })
);

function DrawerFooter(): JSX.Element {
  const classes = useStyles();
  const { title, description, author, social } = useSiteMetadata();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Author: {author}
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography variant="body2" color="textSecondary">
          {social.mail ? (
            <Box mr={1} component="span">
              <MuiLink href={`mailto:${social.mail}`} target="_blank" rel="noopener noreferrer" color="inherit" title="Email">
                <EmailIcon />
              </MuiLink>
            </Box>
          ) : null}
          {social.github ? (
            <Box mr={1} component="span">
              <MuiLink
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="GitHub"
              >
                <GitHubIcon />
              </MuiLink>
            </Box>
          ) : null}
          {social.twitter ? (
            <Box mr={1} component="span">
              <MuiLink
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Twitter"
              >
                <TwitterIcon />
              </MuiLink>
            </Box>
          ) : null}
          {social.facebook ? (
            <Box mr={1} component="span">
              <MuiLink
                href={`https://www.facebook.com/${social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Facebook"
              >
                <FacebookIcon />
              </MuiLink>
            </Box>
          ) : null}
          {social.instagram ? (
            <Box mr={1} component="span">
              <MuiLink
                href={`https://instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Instagram"
              >
                <InstagramIcon />
              </MuiLink>
            </Box>
          ) : null}
          {social.youtube ? (
            <Box mr={1} component="span">
              <MuiLink
                href={`https://youtube.com/user/${social.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Youtube"
              >
                <YouTubeIcon />
              </MuiLink>
            </Box>
          ) : null}
        </Typography>
      </div>
    </div>
  );
}
export default DrawerFooter;
