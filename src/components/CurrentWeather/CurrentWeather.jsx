import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import s from './CurrentWeather.module.scss';
// import weatherIcon from '../../assets/img/weather.png';
import DayPeriodWeather from '../DayPeriodWeather/DayPeriodWeather';
import Card from '../Card/Card';

function CurrentWeather({ weather }) {
  const { current, forecast } = weather;
  const [date, setDate] = useState(moment().format('DD MMMM YYYY, HH:mm:ss'));
  const [daily, setDaily] = useState([]);
  const params = ['Temp, °C', 'Feels like', 'Pressure, kPa', 'Humidity, %', 'Wind, km/h'];
  setInterval(() => setDate(moment().format('DD MMMM YYYY, HH:mm:ss')), 1000);
  useEffect(() => {
    const temp = forecast?.forecastday[0]?.hour;
    if (temp) {
      const dailyForecast = temp.filter(({ time }) => (+(time.slice(-5, -3)) + 1) % 3 === 0);
      setDaily(dailyForecast);
    }
  }, [forecast]);

  const dailyPeriods = [
    { name: 'Night', lists: daily.length !== 0 ? daily.slice(0, 2) : '' },
    { name: 'Morning', lists: daily.length !== 0 ? daily.slice(2, 4) : '' },
    { name: 'Day', lists: daily.length !== 0 ? daily.slice(4, 6) : '' },
    { name: 'Evening', lists: daily.length !== 0 ? daily.slice(6, 8) : '' },
  ];

  return (
    <Card>
      <div className={s.container}>
        <div className={s.current}>
          <span className={s.current__date}>{date}</span>
          <img src={current?.condition?.icon} alt="weatherIcon" className={s.current__icon} />
          <span className={s.current__temperature}>{`${current?.temp_c.toString().split('.')[0]}°C`}</span>
        </div>
        <ul className={s.params}>
          {params.map((item) => <li className={s.params__item} key={item}>{item}</li>)}
        </ul>
        {dailyPeriods
          .map((p) => <DayPeriodWeather key={p.name} periodName={p.name} lists={p.lists} />)}
      </div>
    </Card>
  );
}

export default CurrentWeather;
