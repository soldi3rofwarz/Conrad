import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Bg from './../../../../assets/bg.png';
import UserIcon from '@material-ui/icons/PeopleRounded';
import { red, blue } from '@material-ui/core/colors';


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

export const InfoProfile = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" spacing={3}>
         <Grid item xs={12} sm={12} md={6} md={6}>
            <Paper>
                <section className={classes.photoSection}>
                    <img className={classes.bg} src={Bg} />
                    <section className={classes.userPhotoSection}>
                        <div className={classes.bgPhotoAvatar}>
                            <UserIcon className={classes.photoAvatar} />
                        </div>
                    </section>
                </section>
                <section className={classes.profile}>
                    <h1 className={classes.name}>Hagapito Diaz</h1>
                    <p className={classes.title}>7 oficios</p>
                    <p className={classes.caption}>
                        Hago trabajos de lo que se pueda
                    </p>
                </section>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}