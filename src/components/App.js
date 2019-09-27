import React from 'react';
import '../App.css';
import Header from './Header';
import HomePage from './HomePage';
import Navigation from './Navigation';
import Meditate from './meditate/Meditate';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/meditate' component={Meditate} />
        </Switch>
      </div>
    );
  }
}

export default App;
