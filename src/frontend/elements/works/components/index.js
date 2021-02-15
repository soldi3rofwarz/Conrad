import React from 'react';
import {WorkItem} from './work-item';
import {
    makeStyles,
} from '@material-ui/core/styles';
import {Loading} from './../../shared/components/loading';
import {
    LOADING,
    ERROR,
} from './../../shared/hooks/useDataProvider';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        fontWeight: 400,
        color: 'rgba(255,255,255,.8)',
        marginBottom: '1rem',
        marginTop: '1rem',
    },
});

export const Works = (props) => {
    const classes = useStyles();
    const {
        statusData,
        data
    } = props;
    return (
        <div className="container">
            <h1 className={classes.title}>» Empleos</h1>

            {statusData === LOADING && (
                <Loading
                    title='Espere un momento por favor...'
                    description='En este momento estamos cargando los datos. Tenga un poco de paciencia :)'
                />
            )}

            {data && data.map(work => <WorkItem
                username={'Hagapito Diaz'}
                workDate={work.workDate}
                workName={work.name}
                workCaption={work.caption}
                workPrice={work.price}
            />)}
        </div>
    );
};