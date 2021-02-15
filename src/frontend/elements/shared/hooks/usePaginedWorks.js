import {useEffect,} from 'react';
import {useDataProvider} from './useDataProvider';
import { Get } from '../../../../api/data/works.data';

export const usePaginedWorks = () => {
    const initialState = {
        collection: collection,
        statusData: LOADING
    };

    const [state, loading, success, error] = useDataProvider(initialState);
    const {
        collection,
        statusData,
    } = state;

    useEffect(() => {
        if(statusData === LOADING) {
            Get()
            .then(data => success(data))
            .catch(error => dispatch({
                type: ERROR,
                payload: {
                    error: error,
                },
            }));
        }
    }, [url]);

    const loading = (collection) => dispatch({
        type: LOADING,
        payload: {
            collection: collection,
        },
    });

    return [state, loading];

};