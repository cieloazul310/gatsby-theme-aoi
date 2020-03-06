import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { faTwitterSquare, faFacebookSquare, faLine } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from '@reach/router';

import FabIcon from '../../components/FabIcon';
import { shareOnTwitter, shareOnFacebook, shareOnLine } from '../../utils/sharer';

interface Props {
  title?: string;
}

function DrawerSharer({ title }: Props) {
  const location = useLocation();
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem
        component="a"
        button
        href={shareOnTwitter({ url: location.href, title: typeof window !== 'undefined' ? title || document.title : null })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <FabIcon icon={faTwitterSquare} />
        </ListItemIcon>
        <ListItemText primary="Twitterでシェア" />
      </ListItem>
      <ListItem button component="a" href={shareOnFacebook({ url: location.href })} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faFacebookSquare} />
        </ListItemIcon>
        <ListItemText primary="Facebookでシェア" />
      </ListItem>
      <ListItem button component="a" href={shareOnLine({ url: location.href })} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faLine} />
        </ListItemIcon>
        <ListItemText primary="LINEで送る" />
      </ListItem>
    </List>
  );
}

export default DrawerSharer;
