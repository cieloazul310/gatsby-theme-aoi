import * as React from 'react';
import MuiLink from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { faGitlab, faMedium, faTumblr, faGetPocket, faVimeo } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../../components/FabIcon';
import { useSiteMetadata } from '../../graphql-hooks';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      display: 'flex',
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

interface IconBoxProps {
  children: React.ReactNode;
  href: string;
  title?: string;
}

function IconBox({ children, href, title }: IconBoxProps) {
  const classes = useStyles();
  return (
    <MuiLink color="textSecondary" href={href} target="_blank" rel="noopener noreferrer" title={title || undefined}>
      <div className={classes.box}>{children}</div>
    </MuiLink>
  );
}

IconBox.defaultProps = {
  title: undefined,
};

function Socials(): JSX.Element {
  const classes = useStyles();
  const { mail, github, twitter, facebook, gitlab, medium, linkedin, pocket, tumblr, instagram, youtube, vimeo } = useSiteMetadata().social;
  const fontSize = 'default';

  return (
    <address>
      <div className={classes.root}>
        {mail !== '' ? (
          <IconBox href={`mailto:${mail}`} title="E-Mail">
            <EmailIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {github !== '' ? (
          <IconBox href={`https://github.com/${github}`} title="GitHub">
            <GitHubIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {gitlab !== '' ? (
          <IconBox href={`https://gitlab.com/${gitlab}`} title="GitLab">
            <FabIcon icon={faGitlab} fontSize={fontSize} />
          </IconBox>
        ) : null}
        {twitter !== '' ? (
          <IconBox href={`https://twitter.com/${twitter}`} title="Twitter">
            <TwitterIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {facebook !== '' ? (
          <IconBox href={`https://www.facebook.com/${facebook}`} title="Facebook">
            <FacebookIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {instagram !== '' ? (
          <IconBox href={`https://instagram.com/${instagram}`} title="instagram">
            <InstagramIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {youtube !== '' ? (
          <IconBox href={`https://youtube.com/user/${youtube}`} title="YouTube">
            <YouTubeIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {tumblr !== '' ? (
          <IconBox href={`https://${tumblr}.tumblr.com`} title="tumblr">
            <FabIcon icon={faTumblr} fontSize={fontSize} />
          </IconBox>
        ) : null}
        {medium !== '' ? (
          <IconBox href={`https://medium.com/@${medium}`} title="Medium">
            <FabIcon icon={faMedium} fontSize={fontSize} />
          </IconBox>
        ) : null}
        {pocket !== '' ? (
          <IconBox href={`https://getpocket.com/@${pocket}`} title="Pocket">
            <FabIcon icon={faGetPocket} fontSize={fontSize} />
          </IconBox>
        ) : null}
        {linkedin !== '' ? (
          <IconBox href={`https://linkedin.com/in/${linkedin}`} title="LinkedIn">
            <LinkedInIcon fontSize={fontSize} />
          </IconBox>
        ) : null}
        {vimeo !== '' ? (
          <IconBox href={`https://vimeo.com/${vimeo}`} title="vimeo">
            <FabIcon icon={faVimeo} fontSize={fontSize} />
          </IconBox>
        ) : null}
      </div>
    </address>
  );
}

export default Socials;
