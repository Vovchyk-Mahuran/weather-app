import React, { useContext, useState } from 'react';
import moment from 'moment/moment';
import s from './CurrentDate.module.scss';
import ThemeContext from '../../../context/ThemeContext';

function CurrentDate() {
  const { theme } = useContext(ThemeContext);
  const [date, setDate] = useState(moment().format('DD MMMM YYYY, HH:mm:ss'));

  setInterval(() => setDate(moment().format('DD MMMM YYYY, HH:mm:ss')), 1000);

  return (
    <span className={`${s.date} ${s[theme]}`}>{date}</span>
  );
}

export default CurrentDate;
