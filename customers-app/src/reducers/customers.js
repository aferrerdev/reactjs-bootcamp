import { handleActions } from 'redux-actions';
import { FECTH_CUSTOMERS } from '../constants';

const initialState = [];

export const customers = handleActions({
    [FECTH_CUSTOMERS]: (state, action) => [...action.payload]
}, initialState);