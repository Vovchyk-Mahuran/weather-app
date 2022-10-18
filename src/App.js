import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FutureDays from './components/FutureDays/FutureDays';
import Loader from './components/Loader/Loader';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Vinnitsa');
  const [loading, setLoading] = useState(false);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=7`;

  const fetchData = () => {
    setLoading(true);
    axios.get(url).then(
      (res) => {
        setWeather(res.data);
        setLoading(false);
        setLocation('');
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      try {
        fetchData();
      } catch (err) {
        setLoading(false);
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="App">
      <div className="App__content">
        <div className="App__container">
          <AppHeader
            weather={weather}
            searchLocation={searchLocation}
            setLocation={setLocation}
            locat={location}
          />
          <CurrentWeather weather={weather} />
          <div className="App__futureDays">
            <FutureDays weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
