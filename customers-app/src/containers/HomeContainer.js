import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        this.props.history.push('/customers');
    }

    handleOnClickNewCustomer = () => {
        this.props.history.push('/customers/new');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                                <button onClick={this.handleOnClickNewCustomer}>Crear nuevo cliente</button>
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>  
            </div>
        );
    }
}

export default withRouter(HomeContainer);