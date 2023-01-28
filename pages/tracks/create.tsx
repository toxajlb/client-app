import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';

export default function Create() {
    const [activeStep, setActiveStep] = useState(0);

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1);
        }
    }
    return (
        <>
            <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <Grid container direction={"column"} style={{padding: 20}}>
                    <TextField
                        style={{marginTop: 10}}
                        label={"Название трека"}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={"Имя исполнителя"}
                    />
                    <TextField
                        style={{marginTop: 10}}
                        label={"Слова к треку"}
                        multiline
                        rows={3}
                    />
                </Grid>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
        </>
    )
}
