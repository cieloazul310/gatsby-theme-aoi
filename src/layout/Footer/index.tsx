import * as React from 'react';
import Box from '@mui/material/Box';
import Socials from './Socials';
import Copyrights from './Copyrights';

function Footer(): JSX.Element {
  return (
    <footer>
      <Box py={2}>
        <Socials />
        <Copyrights />
      </Box>
    </footer>
  );
}

export default Footer;
