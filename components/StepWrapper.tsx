import { Container, Grid, Card, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

interface StepWrapperProps {
    children: React.ReactNode;
    activeStep: number;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0 ', height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
}

export default StepWrapper;
