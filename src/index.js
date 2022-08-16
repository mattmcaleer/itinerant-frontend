import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const root = createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

