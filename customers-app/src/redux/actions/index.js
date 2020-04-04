import { FECTH_CUSTOMERS, INSERT_CUSTOMER, DELETE_CUSTOMER } from "./../../constants";
import { createAction } from 'redux-actions';
import { apiGet, apiPost, apiDelete } from './../../api'
import { urlCustomers } from "./../../api/urls";
import { UPDATE_CUSTOMER } from '../../constants';
import { apiPut } from './../../api'

export const fetchCustomers = createAction(FECTH_CUSTOMERS, apiGet(urlCustomers));

export const updateCustomer = createAction(UPDATE_CUSTOMER, (id, customer) => {
    return apiPut(urlCustomers, id, customer)();
});

export const insertCustomer = createAction(INSERT_CUSTOMER, (customer) => {
    customer.id = customer.dni;
    return apiPost(urlCustomers, customer)();
});

export const deleteCustomer = createAction(DELETE_CUSTOMER, (id) => {
    return apiDelete(urlCustomers, id)();
});