import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import s from './CurrentWeather.module.scss';
import DayPeriodWeather from '../DayPeriodWeather/DayPeriodWeather';
import Card from '../Card/Card';
import Context from '../../context/Context';
import CurrentDate from './CurrentDate/CurrentDate';
import ThemeContext from '../../context/ThemeContext';

function CurrentWeather() {
  const { theme } = useContext(ThemeContext);
  const { weather } = useContext(Context);
  const { current, forecast } = weather;

  const [daily, setDaily] = useState([]);
  const params = ['Temp, °C', 'Feels like', 'Pressure, kPa', 'Humidity, %', 'Wind, km/h'];

  useEffect(() => {
    const temp = forecast?.forecastday[0]?.hour;
    if (temp) {
      const dailyForecast = temp.filter(({ time }) => (+(time.slice(-5, -3)) + 1) % 3 === 0);
      setDaily(dailyForecast);
    }
  }, [forecast]);

  const dailyPeriods = [
    { name: 'Night', lists: daily.length !== 0 ? daily.slice(0, 2) : '' },
    { name: 'Morning', lists: daily.length !== 0 ? daily.slice(2, 4) : '' },
    { name: 'Day', lists: daily.length !== 0 ? daily.slice(4, 6) : '' },
    { name: 'Evening', lists: daily.length !== 0 ? daily.slice(6, 8) : '' },
  ];

  return (
    <Card>
      <div className={s.container}>
        <div className={s.current}>
          <CurrentDate />
          <img src={current?.condition?.icon} alt="weatherIcon" className={s.current__icon} />
          <span className={`${s.current__temperature} ${s[theme]}`}>
            {`${current?.temp_c.toString().split('.')[0]}°C`}
          </span>
        </div>
        <ul className={s.params}>
          {params.map((item) => <li className={s.params__item} key={item}>{item}</li>)}
        </ul>
        <div className={s.dayPeriods}>
          {dailyPeriods
            .map((p) => <DayPeriodWeather key={p.name} periodName={p.name} lists={p.lists} />)}
        </div>
        <Carousel
          className={s.carousel}
          width={150}
          useKeyboardArrows
          swipeable
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
        >
          {dailyPeriods
            .map((p) => <DayPeriodWeather key={p.name} periodName={p.name} lists={p.lists} />)}
        </Carousel>
      </div>
    </Card>
  );
}

export default CurrentWeather;
