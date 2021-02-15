import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/NextWeekRounded';
import { red, blue } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import UserIcon from '@material-ui/icons/PeopleRounded';

import {WorkItem} from '../../works/components/work-item.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  section: {
    marginBottom: '1rem',
  },
  avatar: {
      backgroundColor: red[100],
      color: red[600],
  },
}));

export const Experience = () => {
  const classes = useStyles();
  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3 style={{marginBottom:10}}>Experiencia</h3>
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
          </Paper>
        </Grid>
      </Grid>
  );
}