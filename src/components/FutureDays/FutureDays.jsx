import React, { useEffect, useState } from 'react';
import DayCard from '../DayCard/DayCard';

function FutureDays({ weather }) {
  const { forecast } = weather;
  const [days, setDays] = useState([]);

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
