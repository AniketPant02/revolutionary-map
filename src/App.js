import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Map from './Components/Map';
import About from './Components/About';
import 'antd/dist/antd.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = "App">
          <Route exact path = {process.env.PUBLIC_URL + '/'} component = {Map} />
          <Route path= {process.env.PUBLIC_URL + '/about'} component = {About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App