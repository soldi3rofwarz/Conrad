import React from 'react'
import PageI from './pageI'
import PageII from './pageII'
import PageIII from './pageIII'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    raiz: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  //funcion de material ui para pasar de steps 
  function getSteps() {
    return ['Datos basicos', 'Datos web', 'Datos academicos'];
  }
  
  //funcion que visualiza el contenido de los steps
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PageI 
                    
                    />
      case 1:
        return <PageII/>
      case 2:
        return <PageIII/>
      default:
        return 'Unknown step';
    }
  }  

  
export const SignupPages =()=>{

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    
    return(
        <div>
        <Grid container  style={{minHeight: '100vh' }}>
            <Grid container item xs={12} sm={6} style={{}}>
                <img src='/src/assets/dos.jpg' 
                style={{width: '100%', height:'100%', objectFit: 'cover'}} alt ='robot'/>
            </Grid>

            <Grid container item xs={12} sm={6} alignItems='center' 
            direction='column' justify='space-between' 
            style={{ padding: 10}}>
                <div/>
                <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300}}>

                    <Grid container justify="center">
                        <div className={classes.raiz}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    </div>
                                </div>
                                </StepContent>
                            </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Has registrado tu cuenta</Typography>
                            
                            </Paper>
                        )}
                        </div>
                    </Grid>
                    
                </div>
                <div style={{height:20}}/>
            </Grid>
        </Grid>

       
    </div>
    )
}
  