import * as React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

type GatsbyLinkComposedProps<T = Record<string, unknown>> = Omit<GatsbyLinkProps<T>, 'ref' | 'button'>;

const GatsbyLinkComposed = React.forwardRef<unknown, GatsbyLinkComposedProps>((props, ref) => {
  const { to, state, ...other } = props;
  return <GatsbyLink to={to} state={state} ref={ref} {...other} />;
});

interface ListItemAppLinkPropsBase {
  innerRef?: React.Ref<unknown>;
  naked?: boolean;
}

export type ListItemAppLinkProps = ListItemAppLinkPropsBase & GatsbyLinkComposedProps & Omit<ListItemProps, 'ref'>;

function ListItemAppLink(props: ListItemAppLinkProps): JSX.Element {
  const { className, innerRef, naked, to, button, ...other } = props;

  if (naked) {
    return <GatsbyLinkComposed className={className} ref={innerRef} to={to} {...other} />;
  }
  if (button) {
    return <ListItem component={GatsbyLinkComposed} className={className} to={to} ref={innerRef} button {...other} />;
  }

  return <ListItem component={GatsbyLinkComposed} className={className} to={to} ref={innerRef} {...other} />;
}

export default ListItemAppLink;
