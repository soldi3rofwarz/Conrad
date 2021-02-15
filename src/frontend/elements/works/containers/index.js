import React, {useEffect} from 'react';
import {Works} from './../components/index';
import {Get, GetNext} from './../../../../api/data/works.data';
import {useDataProvider, LOADING,} from './../../shared/hooks/useDataProvider';

export const WorksContainer = () => {
    const [state, loading, success, error] = useDataProvider({
        statusData: LOADING,
    });
    const {data, statusData} = state;
    useEffect(() => {
        loading();
        Get()
        .then(snapshot => {
            const works = [];
            snapshot.forEach(doc => works.push({
                id: doc.id,
                ...doc.data(),
            }));
            success(works);
        })
        .catch(e => error(e));
    }, []);
    return (
        <Works
            statusData={statusData}
            data={data}
        />
    );
};