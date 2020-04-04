import { FECTH_CUSTOMERS, INSERT_CUSTOMER } from "./../../constants";
import { createAction } from 'redux-actions';
import { apiGet, apiPost } from './../../api'
import { urlCustomers } from "./../../api/urls";
import { UPDATE_CUSTOMER } from '../../constants';
import { apiPut } from './../../api'

export const fetchCustomers = createAction(FECTH_CUSTOMERS, apiGet(urlCustomers));

export const updateCustomer = createAction(UPDATE_CUSTOMER, (id, customer) => {
    return apiPut(urlCustomers, id, customer)();
});

export const insertCustomer = createAction(INSERT_CUSTOMER, (customer) => {
    return apiPost(urlCustomers, customer)();
});
