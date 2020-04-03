import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from '../hoc/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
)

const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser un número"
)

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? 'text' : type} /><br/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <Field 
                    name="name" 
                    component={MyField}
                    type="text"
                    validate={isRequired}
                    label="Nombre">
                </Field>
                <Field 
                    name="dni" 
                    component={MyField}
                    validate={isRequired}
                    type="text"
                    label="DNI">
                </Field>
                <Field 
                    name="age"
                    component={MyField}
                    validate={[isRequired, isNumber]}
                    type="number"
                    label="Edad">
                </Field>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

const CostumerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

export default setPropsAsInitial(CostumerEditForm);