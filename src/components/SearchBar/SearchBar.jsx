import React from 'react';
import s from './SearchBar.module.scss';
import searchIcon from '../../assets/img/searchIcon.svg';

function SearchBar({ searchLocation, setLocation, location }) {
  return (
    <div className={s.searchbar}>
      <img className={s.searchbar__icon} src={searchIcon} alt="searchIcon" />
      <input
        value={location}
        className={s.searchbar__input}
        placeholder="Search the city"
        onKeyPress={searchLocation}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
