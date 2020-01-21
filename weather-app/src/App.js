import React from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <div className="App">
     Weather app (aplicación del clima)
     <WeatherLocation />
     <WeatherLocation />
    </div>
  );
}

export default App;
