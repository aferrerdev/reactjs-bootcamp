import { FECTH_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions';

const customers = [
    {
        "dni": "27000000",
        "name": "Juan Pérez",
        "age": 37
    },
    {
        "dni": "30000000",
        "name": "Luíz Martínez",
        "age": 43
    },
    {
        "dni": "33000000",
        "name": "Otro",
        "age": 35
    }
]

export const fetchCustomers = createAction(FECTH_CUSTOMERS, () => customers);