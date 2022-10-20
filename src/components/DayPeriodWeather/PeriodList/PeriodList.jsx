/* eslint-disable camelcase */
import React from 'react';
import s from './PeriodList.module.scss';

function PeriodList({ list }) {
  const {
    temp_c, condition, time, feelslike_c, pressure_mb, humidity, wind_kph,
  } = list;

  return (
    <ul className={s.list}>
      <li className={s.list__item}>{time.slice(-5)}</li>
      <li className={s.list__item}>
        <img src={condition?.icon} alt={condition?.text} />
      </li>
      <li className={s.list__item}>
        {temp_c}
        {' '}
        &deg;
      </li>
      <li className={s.list__item}>
        {feelslike_c}
        &deg;
      </li>
      <li className={s.list__item}>{pressure_mb}</li>
      <li className={s.list__item}>{humidity}</li>
      <li className={s.list__item}>{wind_kph}</li>
    </ul>
  );
}

export default PeriodList;
