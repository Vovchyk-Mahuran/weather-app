import React from 'react';
import s from './AppHeader.module.scss';
import SearchBar from '../SearchBar/SearchBar';

function AppHeader() {
  return (
    <div className={s.header}>
      <span className={s.header__location}>Vinnytsia, Ukraine</span>
      <SearchBar />
    </div>
  );
}

export default AppHeader;
