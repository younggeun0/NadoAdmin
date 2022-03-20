import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import Menu from './Menu';
import AppBar from './AppBar';

export default function (props: LayoutProps) {
  return <Layout {...props} appBar={AppBar} menu={Menu} />;
}
