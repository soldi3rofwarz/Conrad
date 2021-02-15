import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';

const PageII = () => {
    return ( 
        <>
        <Grid container style={{minHeight: "100vh" }}>
            
            <Grid container item xs={12} sm={6} alignItems='center' 
            direction='column' justify='space-between' 
            style={{padding: 10,}}>
                <div/>
                <div style={{display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 300}}>

                    <Grid container justify="center">
                            <img src='/src/assets/registro.svg' alt='logo' width='100'/>
                    </Grid>
                    <TextField label='correo' margin='normal' type='email'/>
                    <TextField label='contraseña' margin='normal' type='password'/>
                    <TextField label='Confirmar contraseña' margin='normal' type='password'/>
                </div>
                <div style={{height:20}}/>
            </Grid>
        </Grid>
        </>
     );
}
 
export default PageII;