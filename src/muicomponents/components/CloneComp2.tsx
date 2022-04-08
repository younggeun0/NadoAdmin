/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px' }}>
        .
    </Box>
);

function CloneComp2() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography style={{ fontSize: 14 }} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography>
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography style={{ marginBottom: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default CloneComp2;
