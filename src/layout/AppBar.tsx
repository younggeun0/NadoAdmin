import * as React from 'react';
import { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

// const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
//   const translate = useTranslate();
//   return (
//     <MenuItemLink
//       ref={ref}
//       to="/configuration"
//       primaryText={translate('pos.configuration')}
//       leftIcon={<SettingsIcon />}
//       onClick={props.onClick}
//       sidebarIsOpen
//     />
//   );
// });

// function CustomUserMenu(props: any) {
//   return (
//     <UserMenu {...props}>
//       <ConfigurationMenu />
//     </UserMenu>
//   );
// }

function CustomAppBar(props: any) {
  const classes = useStyles();
  return (
    // <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
    <AppBar {...props} elevation={1}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      {/* <Logo /> */}
      나도 어드민...
      <span className={classes.spacer} />
    </AppBar>
  );
}

export default CustomAppBar;
