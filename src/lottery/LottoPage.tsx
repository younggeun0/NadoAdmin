/* eslint-disable react/no-array-index-key */
import { Box, Card, CardContent } from '@mui/material';
import React from 'react';
import { GetLotto645Number } from './numberBuilder';

function LottoPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pickedNumbers = GetLotto645Number();
    const defaultStyle = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '2em',
        minWidth: '20px',
        margin: '0.2em',
        fontSize: '0.8em',
        border: '1px solid #f56d6d',
    };

    const pickedStyle = {
        ...defaultStyle,
        backgroundColor: '#555555',
        color: 'white',
    };

    return (
        <Card
            style={{
                display: 'inline-flex',
                margin: '0.2em',
                minWidth: '222px',
                maxWidth: '222px',
            }}
        >
            <CardContent>
                {new Array(45).fill(null).map((v, i) => {
                    return (
                        <Box key={i} sx={pickedNumbers.includes(i) ? pickedStyle : defaultStyle}>
                            {i + 1}
                        </Box>
                    );
                })}
            </CardContent>
        </Card>
    );
}

export default LottoPage;
