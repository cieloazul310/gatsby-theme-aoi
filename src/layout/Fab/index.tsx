import * as React from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  className?: string;
  onClick?: () => void;
}

function FloationActionButton({
  className,
  onClick = () => {
    // do nothing
  },
}: Props): JSX.Element {
  return (
    <Tooltip title="Menu" placement="top">
      <Fab className={className} onClick={onClick} color="secondary">
        <MenuIcon />
      </Fab>
    </Tooltip>
  );
}

FloationActionButton.defaultProps = {
  className: undefined,
  onClick: () => {
    // do nothing
  },
};

export default FloationActionButton;
