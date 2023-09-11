import React from 'react';
import pointerIcon from '../icons/pointer-icon.svg';

export default function CreateObj(props) {
  const { name, description, placeImg, date, location, googleMaps } = props;

  const obj = (
    <div className='journey-container'>
      <div className='left-section-container'>
        <img className="place-image" src={`images/${placeImg}`}/>
      </div>
      <div className='right-section-container'>

        <div className='location-info-container'>
          <div className='location-container'>
            <img className='pointer-icon-image' src={pointerIcon}/>
            {location.toUpperCase()}
          </div>
          <div className='google-maps-container'>
            <a className="google-maps-link" href={googleMaps}>
              View on Google Maps
            </a>
          </div>
        </div>

        <div className='location-name-container'>
          {name}
        </div>
        <div className='date-container'>
          {date.arrive} - {date.dapart}
        </div>
        <div className='description-container'>
          {description}
        </div>
      </div>
    </div>
  );

  return obj;
} 