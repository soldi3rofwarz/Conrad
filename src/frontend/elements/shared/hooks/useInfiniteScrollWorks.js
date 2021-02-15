import { useEffect, } from 'react';
import {useScreen} from './useScreenHook';
import {useDataProvider,} from './useDataProvider';
import {Get, GetNext,} from '../../../../api/data/works.data';

const mergeData = (currentData, newData) => {
    if(newData) {
        const elementsToAdd = newData.filter(newItem => {
            return !currentData.some(item => item.id === newItem.id)
        });
        return [
            ...currentData,
            ...elementsToAdd,
        ];
    }
    return currentData;
};

export const useInfinityScroll = (
    elementToObserveRef,
    charactersRef
) => {
    const [isShowing] = useScreen(elementToObserveRef, '0px');
    const [state, loading, success, error] = useDataProvider({
    });
    const {
        statusData,
        data,
    } = state;
    const {results, info} = data ? data : {};
    charactersRef.current = mergeData(charactersRef.current,results);
    useEffect(() => {
        if(isShowing && statusData !== LOADING) {
            if(info.next) loading(info.next);
        };
    },[isShowing]);
    return [state];
};