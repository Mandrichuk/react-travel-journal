import React from 'react';

import earthIcon from '../icons/earth-icon.svg';

export default function CreateHeader() {
  const header = (
    <header className='header'>
      <div className='icon-container container-inline'>
        <img className='earth-icon-image' src={earthIcon}/>
      </div>
      <div className='header__text-container container-inline'>
        my travel journal.
      </div>

    </header>

  );

  return header;
}