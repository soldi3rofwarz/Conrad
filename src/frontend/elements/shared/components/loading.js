import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: 500,
        color: blueGrey[900],
    },
    description: {
        fontSize: '.9rem',
        fontWeight: 300,
        color: blueGrey[700],
    },
});

export const Loading = (props) => {
    const {
        title,
        description,
    } = props;
    const classes = useStyles();
    return (
        <section className={classes.container}>
            <CircularProgress color="secondary" />
            <h1 className={classes.title}>
                {title}
            </h1>
            <p className={classes.description}>
                {description}
            </p>
        </section>
    );
};