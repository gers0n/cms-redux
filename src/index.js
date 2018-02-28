import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers';
// import registerServiceWorker from './registerServiceWorker';
import{ Provider } from 'react-redux';

import store from './store';
const _root = (<Provider store={store}><App /></Provider>);

ReactDOM.render(_root, document.getElementById('root'));
// registerServiceWorker();
