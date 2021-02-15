import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/KeyboardArrowLeft';
import Slide from '@material-ui/core/Slide';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(3),
        flex: 1,
        color: '#fff',
    },
    toolbar: {
        display: 'flex',
        ...theme.mixins.toolbar,
        minHeight: '66px!important',
    },
    paperFullScreen: {
        backgroundColor: 'rgba(0,0,0,0.3)!important',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogFull = ({
    onClose,
    open,
    title,
    operations,
    children,
}) => {
    const classes = useStyles();
    return (
        <Dialog
            fullScreen open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            classes={{
                paperFullScreen: classes.paperFullScreen,
            }}
        >
            <AppBar position='fixed' style={{ background: 'linear-gradient(45deg, #15234a 30%, #162f75 90%)', }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="subtitle1" className={classes.title}>
                        {title}
                    </Typography>
                    <div>
                        {operations}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar} />
            {children}
        </Dialog>
    );
};