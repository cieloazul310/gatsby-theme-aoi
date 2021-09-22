import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiLink from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faGitlab, faMedium, faTumblr, faGetPocket, faVimeo } from '@fortawesome/free-brands-svg-icons';
import FabIcon from '../../components/FabIcon';
import { useSiteMetadata } from '../../graphql-hooks';

interface IconBoxProps {
  children: React.ReactNode;
  href: string;
  title?: string;
}

function IconBox({ children, href, title }: IconBoxProps) {
  return (
    <MuiLink color="textSecondary" href={href} target="_blank" rel="noopener noreferrer" title={title || undefined}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </MuiLink>
  );
}

IconBox.defaultProps = {
  title: undefined,
};

function Socials(): JSX.Element {
  const { mail, github, twitter, facebook, gitlab, medium, linkedin, pocket, tumblr, instagram, youtube, vimeo } = useSiteMetadata().social;
  const fontSize = 'medium';

  return (
    <address>
      <Stack direction="row" spacing={1} justifyContent="center">
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
      </Stack>
    </address>
  );
}

export default Socials;
