import React, { useContext } from 'react';
import s from './SearchBar.module.scss';
import searchIcon from '../../assets/img/searchIcon.svg';
import searchIconWhite from '../../assets/img/searchIconWhite.svg';
import Context from '../../context/Context';
import ThemeContext from '../../context/ThemeContext';

function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const { searchLocation, location } = useContext(Context);
  return (
    <div className={s.searchbar}>
      <img
        className={s.searchbar__icon}
        src={theme === 'light' ? searchIcon : searchIconWhite}
        alt="searchIcon"
      />
      <input
        ref={location}
        className={`${s.searchbar__input} ${s[theme]}`}
        placeholder="Search the city"
        onKeyPress={searchLocation}
      />
    </div>
  );
}

export default SearchBar;
