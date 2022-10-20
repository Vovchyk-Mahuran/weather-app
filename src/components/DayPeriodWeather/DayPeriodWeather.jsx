import React from 'react';
import PeriodList from './PeriodList/PeriodList';
import s from './DayPeriodWeather.module.scss';

function DayPeriodWeather({ periodName }) {
  return (
    <div className={s.dayPeriod}>
      <span className={s.dayPeriod__period}>{periodName}</span>
      <div className={s.lists}>
        <PeriodList />
        <PeriodList />
      </div>
    </div>
  );
}

export default DayPeriodWeather;
