import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Room from './Room';
import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Room />
    </Provider>
  </React.StrictMode>
);
