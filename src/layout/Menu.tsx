import * as React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { DashboardMenuItem, MenuItemLink, MenuProps } from 'react-admin';

function Menu(props: MenuProps) {
    return (
        <div>
            {/* <DashboardMenuItem /> */}
            <MenuItemLink
                to={{
                    pathname: '/mui_components',
                    state: { _scrollToTop: true },
                }}
                primaryText="MUI 컴포넌트"
                leftIcon={<ViewQuiltIcon />}
            />
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
