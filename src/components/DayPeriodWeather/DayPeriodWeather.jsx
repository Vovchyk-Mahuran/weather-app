import React from 'react';
import PeriodList from './PeriodList/PeriodList';
import s from './DayPeriodWeather.module.scss';

function DayPeriodWeather({ periodName, lists }) {
  return (
    <div className={s.dayPeriod}>
      <span className={s.dayPeriod__period}>{periodName}</span>
      <div className={s.lists}>
        {lists && (
        <>
          <PeriodList list={lists[0]} />
          <PeriodList list={lists[1]} />
        </>
        )}
      </div>
    </div>
  );
}

export default DayPeriodWeather;
