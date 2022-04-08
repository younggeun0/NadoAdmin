import * as React from 'react';
import { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@material-ui/core';
import { useThemeState } from '../ThemeStateProvider';

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

function CustomAppBar(props: any) {
    const classes = useStyles();
    const { theme, setTheme } = useThemeState();
    return (
        <AppBar {...props} elevation={1} userMenu={false} color="default">
            <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title" />
            {/* <Logo /> */}
            nado admin
            <span className={classes.spacer} />
            <IconButton
                onClick={() => {
                    if (theme === 'dark') {
                        setTheme('light');
                    } else {
                        setTheme('dark');
                    }
                }}
            >
                {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </AppBar>
    );
}

export default CustomAppBar;
