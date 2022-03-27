/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        .
    </Box>
);

function CloneComp2() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Word of the Day
                </Typography>
                <Typography>
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
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
