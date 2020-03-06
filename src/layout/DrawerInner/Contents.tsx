import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
// icons
import Home from '@material-ui/icons/Home';
import ListItemAppLink from '../../components/ListItemAppLink';

function Contents() {
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>}>
      <ListItemAppLink to="/" primary="Top" icon={<Home />} selected={false} />
    </List>
  );
}

export default Contents;
