import * as React from 'react';
import Layout, { LayoutProps } from '../../layout';

interface Props extends LayoutProps {
  tabSticky?: boolean;
}

function TabPageLayout({ children, ...props }: Props): JSX.Element {
  return <Layout {...props}>{children}</Layout>;
}

export default TabPageLayout;
