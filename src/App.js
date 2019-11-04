import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route,  } from 'react-router-dom';
import Map from './Components/Map';
import About from './Components/About';


class App extends Component {

  render() {
    return (
      <Map />
    );
  }
}

export default App