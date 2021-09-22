import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { useSiteMetadata } from '../../graphql-hooks';

function CopyrightsContent({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        padding: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

function Copyrights(): JSX.Element {
  const { title, author } = useSiteMetadata();
  return (
    <div>
      <CopyrightsContent>
        <Typography variant="body1">{title}</Typography>
      </CopyrightsContent>
      <CopyrightsContent>
        <Typography variant="body2" component="small">
          © {new Date().getFullYear()} {author} All rights reserved. Built with
          {` `}
          <MuiLink color="secondary" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Gatsby
          </MuiLink>
        </Typography>
      </CopyrightsContent>
    </div>
  );
}

export default Copyrights;
