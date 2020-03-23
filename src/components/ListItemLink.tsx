import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppLink from './AppLink';

type ListItemLinkProps<T = {}> = Omit<ListItemProps, 'ref'> &
  Pick<MuiLinkProps, 'color'> & {
    to: string;
    primaryText: string;
    secondaryText?: string;
    inset?: boolean;
  } & Omit<GatsbyLinkProps<T>, 'ref' | 'button'>;

function ListItemLink({ color = 'inherit', button = false, inset = false, to, primaryText, secondaryText, ...props }: ListItemLinkProps) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  return isMobile || button ? (
    <ListItem component={GatsbyLink} to={to} button {...props}>
      <ListItemText primary={primaryText} secondary={secondaryText} inset={inset} />
    </ListItem>
  ) : (
    <ListItem {...props}>
      <ListItemText
        inset={inset}
        primary={
          <AppLink to={to} color={color}>
            {primaryText}
          </AppLink>
        }
        secondary={secondaryText || null}
      />
    </ListItem>
  );
}
export default ListItemLink;
