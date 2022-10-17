import React from 'react';
import Card from '../Card/Card';
import s from './ParametrCard.module.scss';

function ParametrCard({ title, parametr }) {
  return (
    <Card>
      <div className={s.header}>
        <span className={s.header__title}>{title}</span>
        {parametr && <span>{parametr}</span>}
      </div>
    </Card>
  );
}

export default ParametrCard;
