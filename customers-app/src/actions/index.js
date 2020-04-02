import { FECTH_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions';

export const fetchCustomers = createAction(FECTH_CUSTOMERS);