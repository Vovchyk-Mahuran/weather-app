import React from 'react';
import s from './AppHeader.module.scss';
import SearchBar from '../SearchBar/SearchBar';

function AppHeader({
  searchLocation, setLocation, locat, weather,
}) {
  const { location } = weather;
  const locationName = `${location?.name}, ${location?.country}`;
  return (
    <div className={s.header}>
      <span className={s.header__location}>{locationName}</span>
      <SearchBar searchLocation={searchLocation} location={locat} setLocation={setLocation} />
    </div>
  );
}

export default AppHeader;
