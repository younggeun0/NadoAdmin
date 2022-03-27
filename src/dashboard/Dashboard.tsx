import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';

function Dashboard(props: any) {
    return (
        <Grid container>
            <Grid item>
                <Card>
                    <CardHeader
                        title="🤖 react-admin을 연습하기 위한 토이 프로젝트"
                        subheader="사실 이렇게 쓰는게 맞는지 잘 모르겠어요"
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
