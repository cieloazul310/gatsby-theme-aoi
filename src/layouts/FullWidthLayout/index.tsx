import * as React from 'react';
import Layout, { LayoutProps } from '../../layout';

function FullWidthLayout({ children, componentViewports, ...props }: LayoutProps): JSX.Element {
  const fullWidthViewports = {
    ...componentViewports,
    SwipeableDrawer: true,
    PermanentDrawer: false,
    Fab: true,
  };
  return (
    <Layout componentViewports={fullWidthViewports} {...props}>
      {children}
    </Layout>
  );
}

export default FullWidthLayout;
