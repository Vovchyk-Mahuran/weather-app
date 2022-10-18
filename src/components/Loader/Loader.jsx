import React from 'react';
import s from './Loader.module.scss';

function Loader() {
  return (
    <div className={s.loader}>
      <div className={s.loader__content} />
    </div>
  );
}

export default Loader;
