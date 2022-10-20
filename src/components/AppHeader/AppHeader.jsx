import React, { useContext } from 'react';
import s from './AppHeader.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import Context from '../../context/Context';
import ThemeContext from '../../context/ThemeContext';

function AppHeader() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { weather } = useContext(Context);
  const { location } = weather;
  const locationName = `${location?.name}, ${location?.country}`;
  return (
    <div className={s.header}>
      <span className={`${s.header__location} ${s[theme]}`}>{locationName}</span>
      <SearchBar />
      <button
        className={`${s.header__btn} ${s[theme]}`}
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change Theme
      </button>
    </div>
  );
}

export default AppHeader;
