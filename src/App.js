import React, {
  useEffect, useMemo, useState,
} from 'react';
import './App.scss';
import axios from 'axios';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FutureDays from './components/FutureDays/FutureDays';
import Loader from './components/Loader/Loader';
import Context from './context/Context';
import ThemeContext from './context/ThemeContext';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Vinn');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');

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

  useEffect(fetchData, []);

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      try {
        fetchData();
      } catch (err) {
        setLoading(false);
      }
    }
  };

  const contextValue = useMemo(() => ({
    weather,
    searchLocation,
    setLocation,
    location,
  }), [location]);

  const themeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <Context.Provider value={contextValue}>
        {loading ? (
          <Loader />
        ) : (
          <div className={`App ${theme}`}>
            <div className="App__content">
              <div className="App__container">
                <AppHeader />
                <CurrentWeather />
                <div className="App__futureDays">
                  <FutureDays />
                </div>
              </div>
            </div>
          </div>
        )}
      </Context.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
