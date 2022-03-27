import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { GetPensionLotteryNumber } from './numberBuilder';

function PensionPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pickedNumbers = GetPensionLotteryNumber();
    const defaultStyle = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '2.5em',
        minWidth: '2.5em',
        margin: '0.2em',
        fontSize: '2em',
        borderRadius: '5px',
        border: '3px solid #e4f2fb',
        backgroundColor: '#d4effa',
        color: '#323433',
        fontWeight: 'bold',
    };

    return (
        <Card sx={{ display: 'flex', width: '100%' }}>
            <CardContent sx={{ width: '100%' }}>
                <Typography variant="h5">💰 부자되세요</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {pickedNumbers.map((v, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Box key={i} sx={defaultStyle}>
                            {v}
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

export default PensionPage;
