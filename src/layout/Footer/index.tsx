import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import Socials from './Socials';

interface FooterQuery {
  site: {
    siteMetadata: {
      title: string;
      author: string;
    };
  };
}

function Footer() {
  const data = useStaticQuery<FooterQuery>(graphql`
    query Footer {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  const { title, author } = data.site.siteMetadata;
  return (
    <footer>
      <Box py={4} textAlign="center">
        <Socials />
        <Typography variant="body2" gutterBottom>{title}</Typography>
        <Typography variant="body2" component="small">
          © {new Date().getFullYear()} {author} All
          rights reserved. Built with
          {` `}
          <MuiLink color="secondary" href="https://www.gatsbyjs.org">
            Gatsby
          </MuiLink>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;