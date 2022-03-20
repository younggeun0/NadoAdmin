import * as React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DashboardMenuItem, MenuItemLink, MenuProps } from 'react-admin';

function Menu(props: MenuProps) {
  return (
    <div>
      {' '}
      {/* <DashboardMenuItem /> */}
      <MenuItemLink
        to={{
          pathname: '/lottery',
          state: { _scrollToTop: true },
        }}
        primaryText="복권 번호 생성기"
        leftIcon={<AttachMoneyIcon />}
      />
    </div>
  );
}

export default Menu;
