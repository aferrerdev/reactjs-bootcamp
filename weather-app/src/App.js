import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
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
            Titulo
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className="details">
                
              </div>
            </Col>
          </Row>

        </Grid>
      </div>
    )
  }
}

export default App;
