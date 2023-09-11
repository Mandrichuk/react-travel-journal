import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';

import Header from './scripts/CreateHeader.js';
import Main from './scripts/CreateMain.js';


function CreateApp() {
  const app = (
    <section>
      <Header />
      <Main />

    </section>
  );

  return app;
}


const root = document.getElementById('root');
ReactDOM.render(< CreateApp/>, root);
