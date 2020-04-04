import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllowed, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Age</strong><i>{age}</i></div>
            </div>
            <CustomerActions>
                <button onClick={onBack}>Volver</button>
                { isDeleteAllowed && <button onClick={() => onDelete(id)}>Eliminar</button> }
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllowed: PropTypes.bool.isRequired,
};

export default CustomerData;