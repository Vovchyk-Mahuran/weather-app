import React from 'react';
import s from './PeriodList.module.scss';

function PeriodList() {
  return (
    <ul className={s.list}>
      <li className={s.list__item}>5:00</li>
      <li className={s.list__item}>img</li>
      <li className={s.list__item}>+9&deg;</li>
      <li className={s.list__item}>+9&deg;</li>
      <li className={s.list__item}>759</li>
      <li className={s.list__item}>41</li>
      <li className={s.list__item}>5</li>
      {/* {list.length !== 0 && list.map((item) => <li className={s.list__item}>{item}</li>)} */}
    </ul>
  );
}

export default PeriodList;
