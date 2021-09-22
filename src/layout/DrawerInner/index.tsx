import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// icons
import CloseIcon from '@mui/icons-material/Close';
// Drawer Contents
import Contents from './Contents';
import DrawerSharer from './DrawerSharer';
import StateHandler from './StateHandler';
import DrawerFooter from './DrawerFooter';

interface Props {
  handleDrawer: () => void;
  contents?: React.ReactNode;
  title?: string;
}

function DrawerInner({ handleDrawer, contents, title }: Props): JSX.Element {
  return (
    <div>
      <Toolbar sx={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: {
          xs: 2,
          sm: 3,
        },
      }}>
        <Tooltip title="Close">
          <IconButton onClick={handleDrawer} edge="start">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Divider />
      {contents}
      <Divider />
      <Contents />
      <Divider />
      <StateHandler />
      <Divider />
      <DrawerSharer title={title} />
      <Divider />
      <DrawerFooter />
    </div>
  );
}

DrawerInner.defaultProps = {
  contents: undefined,
  title: undefined,
};

export default DrawerInner;
