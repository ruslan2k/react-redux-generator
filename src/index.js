import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function initApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
if (typeof cordova === 'object') {
  document.addEventListener('deviceready', () => {
    initApp();
  }, false);
} else {
  initApp();
  registerServiceWorker();
}
