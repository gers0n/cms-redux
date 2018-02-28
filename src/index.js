import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import{ Provider } from 'react-redux';

const store = createStore(()=> {});
const _root = (<Provider store={store}><App /></Provider>);

ReactDOM.render(_root, document.getElementById('root'));
registerServiceWorker();
