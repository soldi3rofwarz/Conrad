import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Bg from './../../../../assets/bg.png';
import UserIcon from '@material-ui/icons/PermIdentity';
import { red, blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
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
}));

export const LogIn = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" spacing={3}>
         <Grid item xs={10} sm={6} md={4} lg={4}>
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
                    <h1 className={classes.name}>Login</h1>
                </section>
                <section>
                  <Grid container justify="center" spacing={3}>
                    <Grid item xs={10} sm={10} md={9} lg={9}>
                        <TextField
                            id="email"
                            label="Error"
                            defaultValue="eliabjselvacruz51@gmail.com"
                            helperText="¡Formato de correo incorrecto!"
                            style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid item xs={10} sm={10} md={9} lg={9}>
                        <TextField
                            id="password"
                            label="Contraseña"
                            defaultValue="******"
                            helperText="¡Contraseña incorrecta!"
                            className="inputwidth"
                            style={{width: '100%'}}
                        />
                    </Grid>
                    <Grid style={{textAlign:'center'}} item xs={10} sm={10} md={9} lg={9}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Send/>}
                        >
                            Iniciar
                        </Button>
                    </Grid>
                  </Grid>
                </section>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}