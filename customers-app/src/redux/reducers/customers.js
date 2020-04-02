import { handleActions } from 'redux-actions';
import { FECTH_CUSTOMERS } from '../../constants';

const initialState = [];

const handleFetchCustomers = (state, action) => {
    console.log(action);
    return [...action.payload];
}

export const customers = handleActions({
    [FECTH_CUSTOMERS]: handleFetchCustomers
}, initialState);