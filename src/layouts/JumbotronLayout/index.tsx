import * as React from 'react';
import Layout, { LayoutProps } from '../../layout';

type Props = {
  jumbotron: React.ReactNode;
} & LayoutProps;

export default function JumbotronLayout({ jumbotron, children, ...props }: Props): JSX.Element {
  return (
    <Layout {...props}>
      <div>{jumbotron}</div>
      <div>{children}</div>
    </Layout>
  );
}
