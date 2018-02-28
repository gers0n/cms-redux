import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

import MainHeader from '../MainHeader';
import HomeBody from './HomeBody';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <HomeBody />
        <div className="footer"></div>
      </div>
    );
  }
};

export default connect()(Home);