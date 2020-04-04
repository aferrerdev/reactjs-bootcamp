import { handleActions } from 'redux-actions';
import { FECTH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER } from '../../constants';

const initialState = [];

const handleFetchCustomers = (state, action) => {
    return [...action.payload];
}

const handleInsertCustomer = (state, action) => {
    return [...state, action.payload];
}

const handleUpdateCustomer = (state, action) => {
    const customerPayload = action.payload;
    const { id } = customerPayload;
    // [ { id: 1, name: '', ... },
    //   { id: 2, name: '', ... },
    //   { id: 3, name: '', ... }]
    const customers = state;
    const initialValue = [];
    // .reduce(function(accumulated, customer), initialValue)
    const newCustomers = customers.reduce((accumulated, customer) => {
        if (customer.id == id) {
            // Add to the accumulated result the modified customer (payload)
            // not the one in the state
            return [...accumulated, customerPayload];
        }
        else {
            return [...accumulated, customer];
        }
    }, initialValue);
    return newCustomers;
}

export const customers = handleActions({
    [FECTH_CUSTOMERS]: handleFetchCustomers,
    [INSERT_CUSTOMER]: handleInsertCustomer,
    [UPDATE_CUSTOMER]: handleUpdateCustomer
}, initialState);