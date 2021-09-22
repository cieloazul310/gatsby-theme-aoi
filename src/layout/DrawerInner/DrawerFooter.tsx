import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useSiteMetadata } from '../../graphql-hooks';

function ContentWapper({ children }: { children: React.ReactNode }) {
  return (
    <Box py={1} px={2}>
      {children}
    </Box>
  );
}

function DrawerFooter(): JSX.Element {
  const { title, description, author, social } = useSiteMetadata();
  return (
    <Box py={2}>
      <Box pb={2} px={2}>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
      </Box>
      <ContentWapper>
        <Typography variant="body2" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Author: {author}
        </Typography>
      </ContentWapper>
      <ContentWapper>
        <Typography variant="body2" color="textSecondary">
          <Stack direction="row" justifyContent="center" spacing={1}>
            {social.mail ? (
              <MuiLink href={`mailto:${social.mail}`} target="_blank" rel="noopener noreferrer" color="inherit" title="Email">
                <EmailIcon />
              </MuiLink>
            ) : null}
            {social.github ? (
              <MuiLink
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="GitHub"
              >
                <GitHubIcon />
              </MuiLink>
            ) : null}
            {social.twitter ? (
              <MuiLink
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Twitter"
              >
                <TwitterIcon />
              </MuiLink>
            ) : null}
            {social.facebook ? (
              <MuiLink
                href={`https://www.facebook.com/${social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Facebook"
              >
                <FacebookIcon />
              </MuiLink>
            ) : null}
            {social.instagram ? (
              <MuiLink
                href={`https://instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Instagram"
              >
                <InstagramIcon />
              </MuiLink>
            ) : null}
            {social.youtube ? (
              <MuiLink
                href={`https://youtube.com/user/${social.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                title="Youtube"
              >
                <YouTubeIcon />
              </MuiLink>
            ) : null}
          </Stack>
        </Typography>
      </ContentWapper>
    </Box>
  );
}
export default DrawerFooter;
