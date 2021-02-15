import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Link
} from 'react-router-dom';
import {AuthContext} from './../../auth/contexts/auth-context';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: 'linear-gradient(45deg, #15234a 30%, #162f75 90%)',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
    links: {
        color: '#fff',
    },
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar
            position="relative"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title} noWrap>
                    Conrad
                </Typography>

                <Link
                    className={classes.links}
                    component={Button}
                    to='/contacto'
                >
                    Contacto
                </Link>
                <AuthContext.Consumer>
                    {([user]) => {
                        if(user === null) {
                            return (
                                <>
                                    <Link
                                        className={classes.links}
                                        component={Button}
                                        to='/contacto'
                                    >
                                        Regístrate
                                    </Link>
                                    <Link
                                        className={classes.links}
                                        component={Button}
                                        to='/contacto'
                                    >
                                        Entrar
                                    </Link>
                                </>
                            );
                        }

                        const {email} = user.user.account;
                        
                        return(
                            <Link
                                className={classes.links}
                                component={Button}
                                to='/perfil'
                            >
                                {email}
                            </Link>

                        );
                    }}
                </AuthContext.Consumer>
                
            </Toolbar>
        </AppBar>
    );
};