/* eslint-disable react/jsx-curly-brace-presence */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import CloneComp1 from './components/CloneComp1';
import CloneComp2 from './components/CloneComp2';

function MUIComponents(props: any) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <CloneComp1 />
            </Grid>
            <Grid item>
                <CloneComp2 />
            </Grid>
        </Grid>
    );
}

export default MUIComponents;
