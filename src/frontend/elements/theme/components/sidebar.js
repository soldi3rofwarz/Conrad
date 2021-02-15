import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/NextWeekRounded';
import { red, blue } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import UserIcon from '@material-ui/icons/PeopleRounded';
import Bg from './../../../../assets/bg.png';

const useStyles = makeStyles({
    root: {
        marginTop: '3.2rem',
        marginRight: '1rem',
    },
    section: {
        marginBottom: '1rem',
    },
    profile: {
        padding: '1rem',
        textAlign: 'center',
    },
    photoSection: {
        width: '100%',
    },
    bg: {
        height: '150px',
        objectFit: 'cover',
        width: '100%',
        borderRadius: '.25rem',
    },
    avatar: {
        backgroundColor: red[100],
        color: red[600],
    },
    name: {
        fontSize: '1.2rem',
    },
    title: {
        fontWeight: 500,
        fontSize: '1.1rem',
    },
    caption: {
        fontSize: '.9rem',
    },
    userPhotoSection: {
        display: 'flex',
        justifyContent: 'center',
    },
    bgPhotoAvatar: {
        marginTop: '-48px',
        backgroundColor: blue[100],
        color: blue[600],
        borderRadius: '.6rem',
        border: '5px solid #fff',
        width: '72px',
        height: '72px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoAvatar: {
        fontSize: '2.7rem',
    },
});

export const Sidebar = (props) => {
    const classes = useStyles();
    return (
        <aside className={classes.root}>
            <Paper
                elevation={5}
                className={classes.section}
            >
                <section className={classes.photoSection}>
                    <img className={classes.bg} src={Bg} />
                    <section className={classes.userPhotoSection}>
                        <div className={classes.bgPhotoAvatar}>
                            <UserIcon className={classes.photoAvatar} />
                        </div>
                    </section>
                </section>
                <section className={classes.profile}>
                    <h1 className={classes.name}>Michel Traña</h1>
                    <p className={classes.title}>Ingeniero en Sistemas</p>
                    <p className={classes.caption}>
                        Hago tareas de la universidad para alumnos interesados, por un módico precio.
                    </p>
                </section>
            </Paper>
            <Paper className={classes.section}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Reparar silla" secondary="Jan 9, 2020" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Enjuncar sofa" secondary="Jan 7, 2020" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WorkIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pintar mesa" secondary="July 20, 2020" />
                    </ListItem>
                </List>
            </Paper>
        </aside>
    );
};