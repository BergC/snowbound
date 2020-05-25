import { SEARCH_MOUNTAINS, SET_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    searchResults: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

        case SEARCH_MOUNTAINS:
            return {
                ...state,
                searchResults: {
                    ...payload,
                },
                loading: false,
            };

        default:
            return state;
    }
}
