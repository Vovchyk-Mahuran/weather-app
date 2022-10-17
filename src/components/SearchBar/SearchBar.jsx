import React from 'react';
import s from './SearchBar.module.scss';
import searchIcon from '../../assets/img/searchIcon.svg';

function SearchBar() {
  return (
    <div className={s.searchbar}>
      <img className={s.searchbar__icon} src={searchIcon} alt="searchIcon" />
      <input
        className={s.searchbar__input}
        placeholder="Search the city"
      />
    </div>
  );
}

export default SearchBar;
