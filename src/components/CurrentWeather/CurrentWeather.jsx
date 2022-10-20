import React from 'react';
import s from './CurrentWeather.module.scss';
import weatherIcon from '../../assets/img/weather.png';
import DayPeriodWeather from '../DayPeriodWeather/DayPeriodWeather';
import Card from '../Card/Card';

function CurrentWeather() {
  const params = ['Temp,°C', 'Feels like', 'Pressure, kPa', 'Humidity, %', 'Wind, km/h'];
  return (
    <Card>
      <div className={s.container}>
        <div className={s.current}>
          <span className={s.current__date}>12 October, 2022 11:30</span>
          <img src={weatherIcon} alt="weatherIcon" className={s.current__icon} />
          <span className={s.current__temperature}>+16&deg;C</span>
        </div>
        <ul className={s.params}>
          {params.map((item) => <li className={s.params__item} key={item}>{item}</li>)}
        </ul>
        <DayPeriodWeather periodName="Night" />
        <DayPeriodWeather periodName="Morning" />
        <DayPeriodWeather periodName="Day" />
        <DayPeriodWeather periodName="Evening" />
      </div>
    </Card>
  );
}

export default CurrentWeather;
