/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import { Button, TopToolbar } from 'react-admin';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import LottoPage from './LottoPage';
import PensionPage from './PensionPage';

function LotteryNumGenerator(props: any) {
  const [ mode, setMode ] = useState({ type: 'lotto' });

  // TODO, 게임 수 조절 기능
  return (
    <Box>
      <TopToolbar>
        <Button children={<ConfirmationNumberIcon />} label="로또 6/45" onClick={() => {
          setMode({ type: 'lotto' })
        }}/>
        <Button children={<ConfirmationNumberIcon />} label="연금복권" onClick={() => {
          setMode({ type: 'pension' })
        }} />
      </TopToolbar>
      <Grid container>
        { mode.type === 'lotto' ? (
          <Card>
            <CardContent>
              <Typography variant="h5">💰 복 받으세요</Typography>
              {// eslint-disable-next-line react/no-array-index-key
                new Array(5).fill(null).map((v, i) => <LottoPage key={i} />)
              }
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
