import React, {Component} from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Map from './Components/Map';
import About from './Components/About';


class App extends Component {

  render() {
    return (
      <HashRouter basename="/">
        <div className = "App">  
          <Route exact path="/" component={Map} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default App