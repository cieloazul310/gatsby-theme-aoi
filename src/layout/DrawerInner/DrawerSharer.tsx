import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { faLine } from '@fortawesome/free-brands-svg-icons';

import FabIcon from '../../components/FabIcon';
import { useSiteMetadata } from '../../graphql-hooks';
import useSocialShare from '../../utils/useSocialShare';
import useUpdateOnClint from '../../utils/useUpdateOnClient';

interface Props {
  title?: string;
}

function DrawerSharer({ title }: Props): JSX.Element {
  const isClient = useUpdateOnClint();
  const { lang } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  const lineUrl = useSocialShare('line');
  return (
    <List key={isClient} subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem component="a" button href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <TwitterIcon />
        </ListItemIcon>
        <ListItemText primary={lang === 'ja' ? 'Twitterでシェア' : 'Share on Twitter'} />
      </ListItem>
      <ListItem button component="a" href={fbUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FacebookIcon />
        </ListItemIcon>
        <ListItemText primary={lang === 'ja' ? 'Facebookでシェア' : 'Share on Facebook'} />
      </ListItem>
      <ListItem button component="a" href={lineUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faLine} />
        </ListItemIcon>
        <ListItemText primary={lang === 'ja' ? 'LINEで送る' : 'Share on LINE'} />
      </ListItem>
    </List>
  );
}

DrawerSharer.defaultProps = {
  title: undefined,
};

export default DrawerSharer;
