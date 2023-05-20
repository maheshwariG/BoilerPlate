import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from './App';
import './i18n';
import './variables.css';

ReactDom.render(
  <Provider store={store}>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('app')
);
