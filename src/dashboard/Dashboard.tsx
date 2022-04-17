import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useNotify } from 'react-admin';

function Dashboard(props: any) {
    const notify = useNotify();
    const handleMoreVertIConClick = useCallback(() => {
        notify(`뭘 기대한거죠..`);
    }, [notify]);

    return (
        <Grid container>
            <Grid item>
                <Card>
                    <CardHeader
                        title="🤖 react-admin 연습용 토이 프로젝트"
                        subheader="사실 이렇게 쓰는게 맞는지 잘 모르겠어요"
                        action={
                            <IconButton onClick={handleMoreVertIConClick}>
                                <MoreVertIcon />
                            </IconButton>
                        }
                    />
                    <CardMedia
                        component="img"
                        image="https://github.com/younggeun0/NadoAdmin/blob/main/nado.png?raw=true"
                        alt="alt image for nado admin"
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default Dashboard;
