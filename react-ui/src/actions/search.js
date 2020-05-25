import axios from 'axios';
import { SET_LOADING, SEARCH_MOUNTAINS } from './types';

// Fire off the API post request.
export const searchMountains = (formData) => async (dispatch) => {
    dispatch({
        type: SET_LOADING,
    });

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.post('/api/search', formData, config);

        dispatch({
            type: SEARCH_MOUNTAINS,
            payload: res.data,
        });
    } catch (error) {
        console.error(error);
    }
};
