import React from 'react';
import Obj from './CreateObj.js';
import data from '../data/data.js';


export default function CreateMain() {
  const mainHTML = data.map((item) => (
    <Obj 
      key={item.id}
      {...item}
    />
  ));

  const main = (
    <main className='main'>
      <div className='journies-container'>
      {mainHTML}
      </div>
    </main>
  );

  return main;
}