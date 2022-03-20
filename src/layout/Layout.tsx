import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import Menu from './Menu';

export default function (props: LayoutProps) {
  return <Layout {...props} menu={Menu} />;
}
