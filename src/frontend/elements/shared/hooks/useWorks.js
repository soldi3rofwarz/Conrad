import { useEffect, } from 'react';
import {Get, GetNext,} from '../../../../api/data/works.data';
import {useDataProvider,LOADING,} from './useDataProvider';

export const useWorks = () => {
    const [state, loading, success, error] = useDataProvider({
        startAfterWork: null,
    });

    const {
        statusData,
        startAfterWork,
    } = state;

    useEffect(() => {
        const worksData = [];
        let lastWork = null;
        if(statusData === LOADING) {
            if(startAfterWork === null) {
                Get()
                .then(snapshot => {
                    let count = 0;
                    snapshot.forEach(doc => {
                        worksData.push({
                            id: doc.id,
                            ...doc.data()
                        });
                        count ++;
                        if(snapshot.size === count) lastWork = doc;
                    });
                })
                .catch(e => error(e));
            }
            else {
                GetNext('fecha', 10, startAfterWork)
                .then(data => success(data))
                .catch(e => error(e));
            }
        }
    }, [startAfterWork]);
};