import React from 'react';
import s from './Card.module.scss';

function Card({ children }) {
  return (
    <div className={s.container}>{children}</div>
  );
}

export default Card;
