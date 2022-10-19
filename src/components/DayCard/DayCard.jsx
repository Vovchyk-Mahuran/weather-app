import React, { useContext } from 'react';
import moment from 'moment/moment';
import Card from '../Card/Card';
import s from './DayCard.module.scss';
import ThemeContext from '../../context/ThemeContext';

function DayCard({ dayInfo }) {
  const { theme } = useContext(ThemeContext);
  const { date, day } = dayInfo;
  return (
    <Card>
      <div className={`${s.day} ${s[theme]}`}>
        <div className={s.day__date}>
          <span className={s.day__name}>{moment(date).format('ddd')}</span>
          <span className={s.day__number}>{moment(date).format('DD MMMM')}</span>
        </div>
        <div className={s.weather}>
          <img className={s.weather__icon} src={day?.condition?.icon} alt="icon" />
          <div className={s.weather__temperature}>
            <span className={s.weather__max}>
              {day?.maxtemp_c.toString().split('.')[0]}
              &deg;
            </span>
            <span className={s.weather__min}>
              {day?.mintemp_c.toString().split('.')[0]}
              &deg;
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DayCard;
