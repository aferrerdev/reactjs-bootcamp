import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import PropTypes from 'prop-types';

const cities = [
  "Barcelona,es",
  "Buenos Aires,ar",
  "New York,us",
  "Washington,us",
  "Bogota,col",
  "Ciudad de Mexico,mx"
]

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='subtitle1' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zdepth={4}>
                <div className="details">
                  {
                    city &&
                      <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

App.propTypes = {
  setCity: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(App);