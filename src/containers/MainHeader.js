import React, {Component} from 'react';
import logo from './logo.svg';

class MainHeader extends Component {
  render(){
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" styles={{float:'left', width:'50',textAlign:'left'}}>AVENUE</h1>
        <ul>
          <li>Work</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </header>
    )
  }
};

export default MainHeader;