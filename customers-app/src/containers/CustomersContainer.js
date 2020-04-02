import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomerActions from '../components/CustomerActions';
import { withRouter } from 'react-router-dom';

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
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('customers/new');
    }

    renderBody = (customers) => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customer/'}>       
            </CustomersList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);