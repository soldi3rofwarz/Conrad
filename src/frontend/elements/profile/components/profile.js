import React from 'react';
import {Estudies} from './studies.js';
import {Experience} from './experience.js';
import {InfoProfile} from './infoProfile.js';
import Grid from '@material-ui/core/Grid';

// en este componente se reunen los demas que conforman el perfil de usuario
export const Profile = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid justify="center" item xs={12} sm={12} md={12}>
          <InfoProfile/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Experience/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Estudies/>
        </Grid>
      </Grid>
    </div>
  );
}