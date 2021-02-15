import React from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {makeStyles} from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import Hero from './../../../../assets/abstract-hero.png';

const useStyles = makeStyles({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
    },
    body: {
        padding: '1rem',
        flex: 1,
        flexGrow: 1,
    },
    hero: {
        background: 'linear-gradient(45deg, #15234a 30%, #162f75 90%)',
        minHeight: '350px',
        width: '100%',
        position: 'absolute',
        zIndex: -10,
        '&::before': {
            content: '""',
            backgroundImage: `url(${Hero})`,
            backgroundSize: 'contain',
            position: 'absolute',
            zIndex: 1000,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }
    },
});

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: red[800],
        },
    },
  });

export const Layout = (props) => {
    const {
        children,
    } = props;
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <section className={classes.layout}>
                <Header />
                <section className={classes.hero} />
                <section className={classes.body}>
                    {children}
                </section>
                <Footer />
            </section>
        </ThemeProvider>
    );
};