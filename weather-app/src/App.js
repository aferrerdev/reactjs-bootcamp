import React, { Component } from 'react';
import './App.css';
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
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}>
        </LocationList>
      </div>
    )
  }
}

export default App;
