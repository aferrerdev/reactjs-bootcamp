import { FECTH_CUSTOMERS } from "./../../constants";
import { createAction } from 'redux-actions';
import { apiGet } from './../../api'
import { urlCustomers } from "./../../api/urls";

export const fetchCustomers = createAction(FECTH_CUSTOMERS, apiGet(urlCustomers));