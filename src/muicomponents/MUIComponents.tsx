/* eslint-disable react/jsx-curly-brace-presence */
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CloneComp2 from './components/CloneComp2';

function MUIComponents(props: any) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <CloneComp2 />
            </Grid>
            <Grid item>
                <CloneComp2 />
            </Grid>
        </Grid>
    );
}

export default MUIComponents;
