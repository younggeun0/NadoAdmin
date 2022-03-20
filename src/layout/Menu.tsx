import * as React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DashboardMenuItem, MenuItemLink, MenuProps } from 'react-admin';

function Menu(props: MenuProps) {
  return (
    <div>
      {' '}
      <DashboardMenuItem />
      <MenuItemLink
        to={{
          pathname: '/lotto',
          state: { _scrollToTop: true },
        }}
        primaryText="Lotto"
        leftIcon={<AttachMoneyIcon />}
      />
    </div>
  );
}

export default Menu;
