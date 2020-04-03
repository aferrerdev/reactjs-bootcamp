import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../redux/selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { fetchCustomers, updateCustomer } from './../redux/actions'

class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleSubmit = values => {
        console.log(values);
        const { id } = values;
        this.props.updateCustomer(id, values);
    }

    renderBody = () => {
        return (
            <Route path="/customers/:dni/edit" children={
                ({ match }) => {
                    if (this.props.customer) {
                        const CustomerControl = match ? CustomerEdit : CustomerData;
                        return <CustomerControl 
                            { ...this.props.customer }
                            onSubmit={this.handleSubmit}
                            onBack={this.handleOnBack} />
                    }
                    return null;
                }
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
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer));