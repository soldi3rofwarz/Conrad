import {useReducer} from 'react';

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';

const dataReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case LOADING: return {
            ...state,
            statusData: LOADING,
            dataLoading: payload.dataLoading,
        }
        case SUCCESS: return {
            ...state,
            statusData: SUCCESS,
            data: payload.data,
        }
        case ERROR: return {
            ...state,
            statusData: ERROR,
            error: payload.error,
        }
    }
};

export const useDataProvider = (initialState) => {

    const [state, dispatch] = useReducer(dataReducer, initialState);

    const loading = (dataLoading) => dispatch({
        type: LOADING,
        payload: {
            dataLoading: dataLoading,
        },
    });

    const success = (data) => {
        dispatch({
            type: SUCCESS,
            payload: {
                data: data,
            },
        });
    };

    const error = (error) => dispatch({
        type: ERROR,
        payload: {
            error: error,
        },
    });

    return [state, loading, success, error];

};