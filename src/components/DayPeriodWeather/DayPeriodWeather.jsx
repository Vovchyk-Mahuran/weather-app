import React, { useContext } from 'react';
import PeriodList from './PeriodList/PeriodList';
import s from './DayPeriodWeather.module.scss';
import ThemeContext from '../../context/ThemeContext';

function DayPeriodWeather({ periodName, lists }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${s.dayPeriod} ${s[theme]}`}>
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
