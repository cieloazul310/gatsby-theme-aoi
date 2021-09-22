import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { ComponentViewports } from '../../utils/layoutViewports';

interface Props {
  componentViewports: ComponentViewports;
  toggleDrawer: () => void;
}

function ButtonLeft({ toggleDrawer, componentViewports: { SwipeableDrawer, PermanentDrawer } }: Props): JSX.Element {
  const showMenuButton = SwipeableDrawer !== false && PermanentDrawer === false;
  const onBackButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (typeof window === 'object') window.history.back();
  };
  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Tooltip title="Back">
          <IconButton color="inherit" onClick={onBackButtonClick} edge="start" aria-label="Get back to where you once belonged">
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        {showMenuButton ? (
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer} edge="start" aria-label="Open Menu">
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
    </>
  );
}

export default ButtonLeft;
