import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export const About =()=>{
    const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
        <Grid container spacing={3} >
            <Grid item xs={12} >
                <img src='/src/assets/dos.jpg'
                    style={{width: '100%', height:'100%', objectFit: 'cover'}}
                />
            </Grid>

            <Grid item xs={6} 
            style={{height: '300px', borderBottom:'2px solid white', borderRight:'2px solid white' ,backgroundColor: 'rgba(10, 178, 238,0.2)'}}>
                <h2 style={{color:'white'}}>Nuestra aplicacion</h2>
                <Typography >
                    <br/>
                    Conrad es una aplicacion que se creo para resolver un problema social que 
                    afecta a nuestro pais
                </Typography>
            
            </Grid>

            <Grid item xs={6} style={{marginTop:'300px', height: '200px',  borderLeft: '2px solid white', borderBottom:'2px solid white' ,backgroundColor: 'rgba(10, 178, 238,0.2)'}}>
                <h2 style={{color:'white',  textAlign:'center'}}>Stark Craft</h2>
                <Typography>
                    grupo de programadores que se reunio para idear una propuesta 
                    que ayuda a distintos sectores de la poblacion
                    
                </Typography>
            </Grid>

            <Grid item xs={6} style={{height: '300px', borderRight:'2px solid white', borderBottom:'2px solid white',backgroundColor: 'rgba(10, 178, 238,0.2)'}}>
                <h2 style={{color:'white', textAlign:'center'}}>Mision</h2>
                <Typography>
                    <br/>
                    Ser una plataforma que aumente lacalidad de vida de las personas,
                    ofreciéndoles un espacio en internet para compartir sus competencias 
                    con experiencia real.
                </Typography>
            
            </Grid>

            <Grid item xs={6} style={{marginTop:'300px', height: '200px', borderLeft:'2px solid white', borderBottom:'2px solid white',backgroundColor: 'rgba(10, 178, 238,0.2)'}}>
                <h2 style={{color:'white'}}>Vision</h2>
                <Typography>
                Incrementar las oportunidadeslaborales de las personas, 
                conectandoaquellas que deseen obtener untrabajo.
                </Typography>
            </Grid>
        
        </Grid>
        </div>
    

        </>
    )
}