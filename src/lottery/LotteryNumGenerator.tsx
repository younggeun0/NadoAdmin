/* eslint-disable react/no-array-index-key */
import React, { Fragment, useCallback, useState } from 'react';
import { Button, SelectField, SelectInput, TopToolbar } from 'react-admin';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Box, Card, CardContent, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import LottoPage from './LottoPage';
import PensionPage from './PensionPage';

// const useStyles = makeStyles({
//     toptoolbar: {
//         alignItems: 'center',
//     },
//     gridContainer: {
//         width: '100%',
//     },
// });

function LotteryNumGenerator(props: any) {
    const [mode, setMode] = useState({ type: 'lotto' });
    const [gameCnt, setGameCnt] = useState(5);

    const handleChange = useCallback(event => {
        const newCnt: number = +event.target.value;
        setGameCnt(newCnt);
    }, []);

    // TODO, 게임 수 조절 기능
    return (
        <Box>
            <TopToolbar>
                {mode.type === 'lotto' && (
                    <TextField
                        select
                        variant="filled"
                        label="게임 수"
                        onChange={handleChange}
                        value={gameCnt}
                        style={{ marginRight: '2rem', minWidth: '100px' }}
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </TextField>
                )}
                <Button
                    label="로또 6/45"
                    onClick={() => {
                        setMode({ type: 'lotto' });
                    }}
                >
                    <ConfirmationNumberIcon />
                </Button>
                <Button
                    label="연금복권"
                    onClick={() => {
                        setMode({ type: 'pension' });
                    }}
                >
                    <ConfirmationNumberIcon />
                </Button>
            </TopToolbar>
            <Grid container>
                {mode.type === 'lotto' ? (
                    <Card>
                        <CardContent>
                            <Typography variant="h5">💰 로또 6/45 행운의 번호</Typography>
                            {new Array(gameCnt).fill(null).map((v, i) => (
                                <LottoPage key={i} />
                            ))}
                        </CardContent>
                    </Card>
                ) : (
                    <PensionPage />
                )}
            </Grid>
        </Box>
    );
}

export default LotteryNumGenerator;
