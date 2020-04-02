import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../redux/selectors/customers';

class CustomerContainer extends Component {

    renderBody = () => {
        return (
            <Route path="/customers/:dni/edit" children={
                ({ match }) => (match ? <p>Editar cliente {this.props.customer.name}</p> : <p>Datos cliente {this.props.customer.name}</p>)
            } ></Route>
            
        )
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));