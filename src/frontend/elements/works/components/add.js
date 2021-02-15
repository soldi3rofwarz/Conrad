import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {DialogFull} from './../../theme/components/dialog-full';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {red} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        marginRight: '4rem',
        marginBottom: '3.5rem',
        backgroundColor: red[700],
    },
    title: {
        width: '100%',
        fontSize: '1.3rem',
        fontWeight: 500,
    },
    container: {
        maxWidth: '100%',
        minHeight: '215px',
        marginTop: theme.spacing(3),
        padding: '1.5rem',
    },
    containerCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textfield: {
        width: '100%',
        marginTop: '1rem',
    },
    containerButtons: {
        width: '100%',
    },
    button: {
        marginTop: '1rem',
        backgroundColor: red[700],
    },
}));

export const WorkAdd = (props) => {
    const {
        openWorkPost,
        onOpenWorkPost,
        onCloseWorkPost,        

        name,
        onChangeName,

        caption,
        onChangeCaption,

        price,
        onChangePrice,

        onClickWorkPost,

        state,
        error,
    } = props;
    const classes = useStyles();
    return (
        <>
            <Fab
                onClick={onOpenWorkPost}
                color="primary"
                aria-label="add"
                className={classes.fab}
            >
                <AddIcon />
            </Fab>
            <DialogFull
                open={openWorkPost}
                onClose={onCloseWorkPost}
                title="Publicación de Empleo"
            >
                <Grid container justify={'center'}>
                    <Grid item xs={10} sm={8} md={6}>
                        <Paper className={clsx(classes.container, classes.containerCenter)}>
                            <h1 className={classes.title}>Solicita un empleo</h1>
                            <TextField
                                className={classes.textfield}
                                label="Descripción del empleo"
                                variant="outlined"
                                value={name}
                                onChange={onChangeName}
                                disabled={ state === 'loading' ? true : false }
                            />
                            <TextField
                                className={classes.textfield}
                                label="Añada actividades a desempeñar"
                                variant="outlined"
                                multiline
                                rows={4}
                                rowsMax={4}
                                value={caption}
                                onChange={onChangeCaption}
                                disabled={ state === 'loading' ? true : false }
                            />
                            <TextField
                                className={classes.textfield}
                                label="Pago (C$)"
                                type='number'
                                variant="outlined"
                                value={price}
                                onChange={onChangePrice}
                                disabled={ state === 'loading' ? true : false }
                            />
                            <div className={classes.containerButtons}>
                                <Button
                                    className={classes.button}
                                    variant='contained'
                                    color="secondary"
                                    onClick={onClickWorkPost}
                                    disabled={ state === 'loading' ? true : false }
                                >
                                    Publicar
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </DialogFull>
            
        </>
    );
};