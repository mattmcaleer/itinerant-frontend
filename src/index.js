import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageItineraries from './reducers/manageItineraries';

const root = createRoot(document.getElementById('root'));
const store = createStore(manageItineraries)

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

