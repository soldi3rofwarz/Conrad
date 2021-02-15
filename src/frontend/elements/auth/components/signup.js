import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Bg from './../../../../assets/signup-bg.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Logo from './../../../../assets/logo.png';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        minHeight: '100%',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin: '1rem 0',
        fontSize: '1.3rem',
    },
    logo: {
        width: '96px',
    },
    bg: {
        height: '80vh',
        width: '100%',
        objectFit: 'cover',
    },
    form: {
        padding: '1rem',
    },
    textfield: {
        width: '100%',
    },
    radioGender: {
        display: 'flex',
    },
    space: {
        marginBottom: '1rem',
    },
    button: {
        marginRight: '.5rem',
    },
});

export const Signup = (props) => {
    const classes = useStyles();
    const {
        name,
        onChangeName,
        email,
        onChangeEmail,
        password,
        onChangePassword,
        gender,
        onChangeGender,
        onClickRegister,
    } = props;
    return (
        <section className={classes.container}>
            <Grid container className={classes.root}>
                <Grid item xs={11} sm={4}>
                    <Paper className={classes.form}>
                        <section className={classes.logoContainer}>
                            <img
                                className={classes.logo}
                                src={Logo}
                            />
                            <h1 className={classes.title}>Trabajando por tí! Regístrate</h1>
                        </section>
                        <TextField
                            className={clsx(classes.textfield, classes.space)}
                            label="Nombre completo"
                            variant="outlined"
                            value={name}
                            onChange={onChangeName}
                        />
                        <FormControl className={clsx(classes.space,classes.radioGender)} component="fieldset">
                            <FormLabel component="legend">Género</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                onChange={onChangeGender}
                                value={gender}
                            >
                                <FormControlLabel value="" control={<Radio />} label="Mujer" />
                                <FormControlLabel value="m" control={<Radio />} label="Hombre" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            className={clsx(classes.textfield, classes.space)}
                            label="Correo"
                            variant="outlined"
                            value={email}
                            onChange={onChangeEmail}
                        />
                        <TextField
                            className={clsx(classes.textfield, classes.space)}
                            label="Contraseña"
                            variant="outlined"
                            type='password'
                            value={password}
                            onChange={onChangePassword}
                        />
                        <div className={classes.containerButtons}>
                            <Button
                                className={classes.button}
                                variant='contained'
                                color="secondary"
                                onClick={onClickRegister}
                            >
                                Registrarse
                            </Button>
                            <Link
                                component={Button}
                                variant='outlined'
                                color='secondary'
                                to='/login'
                            >
                                Iniciar Sesión
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    );
};