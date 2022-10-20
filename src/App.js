import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import FutureDays from './components/FutureDays/FutureDays';
import Loader from './components/Loader/Loader';
import Context from './context/Context';
import ThemeContext from './context/ThemeContext';
import WeatherAPI from './API/weather';

function App() {
  const [weather, setWeather] = useState({});
  const location = useRef('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  const fetchData = () => {
    setLoading(true);
    WeatherAPI.getWeatherByLocation(location.current.value || 'Vinn').then(
      (res) => {
        setWeather(res.data);
        setLoading(false);
      },
      () => {
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

  const contextValue = useMemo(
    () => ({
      weather,
      searchLocation,
      location,
    }),
    [weather],
  );

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
