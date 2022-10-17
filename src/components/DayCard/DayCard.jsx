import React from 'react';
import Card from '../Card/Card';
import s from './DayCard.module.scss';
import weatherIcon from '../../assets/img/weather.png';

function DayCard() {
  return (
    <Card>
      <div className={s.day}>
        <div className={s.day__date}>
          <span className={s.day__name}>Tue</span>
          <span className={s.day__number}>14 October</span>
        </div>
        <div className={s.weather}>
          <img className={s.weather__icon} src={weatherIcon} alt="icon" />
          <div className={s.weather__temperature}>
            <span className={s.weather__max}>+16&deg;</span>
            <span className={s.weather__min}>+11&deg;</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DayCard;
