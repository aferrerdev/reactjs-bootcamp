import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';

const cities = [
  "Barcelona,es",
  "Buenos Aires,ar",
  "New York,us",
  "Washington,us",
  "Bogota,col",
  "Ciudad de Mexico,mx"
]

class App extends Component {

  handleSelectedLocation = city => {
    console.log(city);
  }

  render() {
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
              <Paper elevation={4}>
                <div className="details">

                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
