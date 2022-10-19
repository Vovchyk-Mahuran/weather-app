import React, { useContext, useEffect, useState } from 'react';
import DayCard from '../DayCard/DayCard';
import Context from '../../context/Context';

function FutureDays() {
  const [days, setDays] = useState([]);
  const { weather } = useContext(Context);
  const { forecast } = weather;

  useEffect(() => {
    if (forecast?.forecastday) {
      setDays(forecast.forecastday.slice(1));
    }
  }, [weather]);

  return (
    <>
      {days.map((day) => <DayCard key={day?.date} dayInfo={day} />)}
    </>
  );
}

export default FutureDays;
