import React, { useContext } from 'react';
import PeriodList from './PeriodList/PeriodList';
import s from './DayPeriodWeather.module.scss';
import ThemeContext from '../../context/ThemeContext';

function DayPeriodWeather({ period }) {
  const { name, lists } = period;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${s.dayPeriod} ${s[theme]}`}>
      <span className={s.dayPeriod__period}>{name}</span>
      <div className={s.lists}>
        {lists
          && lists.map((list) => <PeriodList key={list?.time} list={list} />)}
      </div>
    </div>
  );
}

export default DayPeriodWeather;
