import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../hoc/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { Prompt } from 'react-router-dom';

const isNumber = value => (isNaN(Number(value)) && "Este campo debe ser un número")

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if (!values.dni) {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
}

const renderField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} 
            type={!type ? 'text' : type} /><br/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const toNumber = value => (value && Number(value));
const toUpper = value => (value && value.toUpperCase());
const toLower = value => (value && value.toLowerCase());

const CustomerEdit = ({ handleSubmit, onBack, submitting, pristine, submitSucceeded, withFocus }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field
                    withFocus
                    name="name" 
                    component={renderField}
                    type="text"
                    parse={toUpper}
                    format={toLower}
                    label="Nombre">
                </Field>
                <Field 
                    name="dni" 
                    component={renderField}
                    type="text"
                    label="DNI">
                </Field>
                <Field 
                    name="age"
                    component={renderField}
                    validate={[isNumber]}
                    type="number"
                    label="Edad"
                    parse={toNumber}>
                </Field>
                <CustomerActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
                <Prompt 
                    when={!pristine && !submitSucceeded}
                    message="Se perderan los datos si continúa"></Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    handleSubmit: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

const CostumerEditForm = reduxForm({ 
    form: 'CustomerEdit' ,
    validate // Global validations
})(CustomerEdit);

export default setPropsAsInitial(CostumerEditForm);