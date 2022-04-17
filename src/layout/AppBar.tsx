import * as React from 'react';
import { AppBar, ToggleThemeButton } from 'react-admin';
import Typography from '@mui/material/Typography';
import useClasses from '../hooks/useClasses';
import { darkTheme, lightTheme } from '../themes';

// import Logo from './Logo';

const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
};

function CustomAppBar(props: any) {
    const classes = useClasses(styles);
    return (
        <AppBar {...props} elevation={1} userMenu={false} color="default">
            <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title" />
            {/* <Logo /> */}
            nado admin
            <span className={classes.spacer} />
            <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
        </AppBar>
    );
}

export default CustomAppBar;
