import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

const useStyles = makeStyles({
    footerSection: {
        marginBottom: 0,
        background:  'linear-gradient(45deg, #15234a 30%, #162f75 90%)',
        color: 'white',
        fontSize: '13px',
        padding: '8px 12px',
        lineHeight: '32px',
    },
    devContent: {
        float: 'right',
        height: 32,
    },
    devProfilePhoto: {
        width: 32,
        height: 32,
    },
    links: {
        color: 'white',
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 500,
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '0 .3rem',
    },
});

export const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footerSection}>
            <Grid container className={classes.root}>
                    <Grid item xs={10} sm={9} className="blue-grey darken-4">
                        <span className="copyright">
                            &copy; Copyright - <Link to="/" className={classes.links}>conrad-app.com</Link> 2020.
                        </span>
                    </Grid>
                    <Grid item xs={2} sm={3}>
                        <a
                            className={clsx(classes.devContent, classes.links)}
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Privacidad
                        </a>
                        <a
                            className={clsx(classes.devContent, classes.links)}
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Condiciones
                        </a>
                        <a
                            className={clsx(classes.devContent, classes.links)}
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Stark's Carft
                        </a>
                    </Grid>
                </Grid>
        </footer>
    );
};