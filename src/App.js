import React from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DayCard from './components/DayCard/DayCard';
import ParametrCard from './components/ParametrCard/ParametrCard';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__container">
          <AppHeader />
          <CurrentWeather />
          <div className="App__parametrs">
            <ParametrCard title="UV Index" parametr="4.50 UV" />
            <ParametrCard title="Sunrise and Sunset" />
            <ParametrCard title="Humidity" parametr="55%" />
          </div>
          <div className="App__futureDays">
            <DayCard />
            <DayCard />
            <DayCard />
            <DayCard />
            <DayCard />
            <DayCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
