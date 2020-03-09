import * as React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { navigate } from '@reach/router';

interface Props {
  onButtonClick?: () => void;
}

function ButtonLeft({
  onButtonClick = () => {
    navigate(-1);
  },
}: Props) {
  return (
    <Hidden mdUp implementation="css">
      <Tooltip title="Back">
        <IconButton color="inherit" onClick={onButtonClick} edge="start" aria-label="Get back to where you once belonged">
          <ArrowBackIosIcon />
        </IconButton>
      </Tooltip>
    </Hidden>
  );
}

export default ButtonLeft;
