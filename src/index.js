import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// CRA disables all service workers by default; don't disable if you want mock data.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_FORCE_MOCK_DATA) {
  const { worker } = require('./api/mocks')
  worker.start()
} else {
  serviceWorker.unregister();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
