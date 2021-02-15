import React from 'react';
import {Layout} from './layout';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {Sidebar} from './sidebar';

const useStyles = makeStyles({
    root: {}
});

export const LayoutWithSidebar = (props) => {
    const classes = useStyles();
    const {children} = props;
    return (
        <Layout>
            <Grid container className={classes.root} justify='center'>
                <Grid item xs={11} sm={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={11} sm={6}>
                    {children}
                </Grid>
            </Grid>
        </Layout>
    );
};