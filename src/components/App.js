import React from 'react';
import '../App.css';
import Header from './Header';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Meditate from './meditate/Meditate';
import NewJournalControl from './journals/NewJournalControl';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <div className='container'>
        <Meditate />
        <NewJournalControl />
      </div>
      </div>
    );
  }
}

export default App;
