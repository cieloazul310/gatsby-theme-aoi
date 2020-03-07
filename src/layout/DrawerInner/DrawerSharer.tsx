import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { faTwitterSquare, faFacebookSquare, faLine } from '@fortawesome/free-brands-svg-icons';

import FabIcon from '../../components/FabIcon';
import useSocialShare from '../../utils/useSocialShare';

interface Props {
  title?: string;
}

function DrawerSharer({ title }: Props) {
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  const lineUrl = useSocialShare('line');
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem component="a" button href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faTwitterSquare} />
        </ListItemIcon>
        <ListItemText primary="Twitterでシェア" />
      </ListItem>
      <ListItem button component="a" href={fbUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faFacebookSquare} />
        </ListItemIcon>
        <ListItemText primary="Facebookでシェア" />
      </ListItem>
      <ListItem button component="a" href={lineUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faLine} />
        </ListItemIcon>
        <ListItemText primary="LINEで送る" />
      </ListItem>
    </List>
  );
}

export default DrawerSharer;
