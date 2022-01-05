import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Soil from './Components/Soil';
import Weather from './Components/Weather';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <ul className="navbar-nav mr-auto">
            {/* <li><Link to={'/Soil'} className="nav-link">Soil</Link></li>
            <li><Link to={'/Weather'} className="nav-link">Weather Forecast</Link></li> */}
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/Soil' component={Soil} />
            <Route exact path='/Weather' component={Weather} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
