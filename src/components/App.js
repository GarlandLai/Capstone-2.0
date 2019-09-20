import React from 'react';
import '../App.css';
import Header from './Header';
import HomePage from './HomePage';
import Navigation from './Navigation';
import Relax from './Relax/Relax';
import Learn from './Learn/Learn';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/relax' component={Relax} />
          <Route exact path='/learn' component={Learn} />
        </Switch>
      </div>
    );
  }
}

export default App;
