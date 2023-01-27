import { Button, Card, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/tracks';

export default function Index() {
    const router = useRouter();
    const tracks: ITrack[] = [];

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: '900px'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}
