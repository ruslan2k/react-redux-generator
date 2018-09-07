import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import VConsole from 'vconsole'
import { HashRouter, Switch, Route } from 'react-router-dom';
const Router = HashRouter

var vConsole = new VConsole()

function initApp() {
  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </Router>
    </Provider>
  ), document.getElementById('root'));
}

if (typeof cordova === 'object') {
  document.addEventListener('deviceready', () => {
    initApp();
  }, false);
} else {
  initApp();
  registerServiceWorker();
}
