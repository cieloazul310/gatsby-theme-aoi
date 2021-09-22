import * as React from 'react';
import Box from '@mui/material/Box';
import ShareButtons from './ShareButtons';

interface Props {
  title?: string;
}

function ButtonRight({ title }: Props): JSX.Element {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <ShareButtons color="inherit" title={title} />
      </Box>
      <Box
        sx={{
          padding: 1.5,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            marginRight: -1.5,
          }}
        />
      </Box>
    </>
  );
}

ButtonRight.defaultProps = {
  title: undefined,
};

export default ButtonRight;
