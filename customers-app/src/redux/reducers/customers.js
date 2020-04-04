import { handleActions } from 'redux-actions';
import { FECTH_CUSTOMERS, INSERT_CUSTOMER } from '../../constants';

const initialState = [];

const handleFetchCustomers = (state, action) => {
    return [...action.payload];
}

const handleInsertCustomer = (state, action) => {
    return [...state, action.payload];
}

export const customers = handleActions({
    [FECTH_CUSTOMERS]: handleFetchCustomers,
    [INSERT_CUSTOMER]: handleInsertCustomer
}, initialState);