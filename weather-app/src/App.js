import React from 'react';
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

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
