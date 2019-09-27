import React from 'react';
import '../App.css';
import Header from './Header';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Meditate from './meditate/Meditate';
import NewJournalControl from './journals/NewJournalControl';
import JournalList from './journals/JournalList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterJournalList: [],
    };
    this.handleNewEntry = this.handleNewEntry.bind(this);
  }

  handleNewEntry(newEntry) {
    let newJournalList = this.state.masterJournalList.slice();
    newJournalList.push(newEntry);
    this.setState({ masterJournalList: newJournalList });
    console.log(newJournalList);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />

        <Meditate />
        <NewJournalControl onNewEntry={this.handleNewEntry} />
      <div className='container'>
        <JournalList journalList={this.masterJournalList} />
      </div>
      </div>
    );
  }
}

export default App;
