import { SEARCH_MOUNTAINS, SET_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    searchResults: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_MOUNTAINS:
            return {
                ...state,
                searchResults: {
                    ...payload,
                },
            };

        default:
            return state;
    }
}
