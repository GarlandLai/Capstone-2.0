import React from 'react';
import '../App.css';
import Header from './Header';
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Meditate from './meditate/Meditate';
import NewJournalControl from './journals/NewJournalControl';
import JournalList from './journals/JournalList';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JournalEntryList: [],
      selectedEntry: null
    };
    this.handleNewEntry = this.handleNewEntry.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/entries')
    .then(response => {
      console.log(response)
      this.setState({
        JournalEntryList: response.data
      })
    })
    .catch(error => console.log(error))
  }


  handleNewEntry(newEntry) {
    let newJournalList = this.state.JournalEntryList.slice();
    newJournalList.push(newEntry);
    this.setState({ JournalEntryList: newJournalList });
    console.log(newJournalList);
  }

  handleSelectEntry = (entry) => {
    this.setState({ selectedEntry: entry })
    alert('Selected journal #' + this.state.selectedEntry.id);
  } 

  render() {
    console.log(this.state.JournalEntryList)
    return (
      <div className="App">
        <Navigation />
        <Header />

        <Meditate />
        <NewJournalControl onNewEntry={this.handleNewEntry} />
      <div className='container'>
        <JournalList onSelectEntry={this.handleSelectEntry} journalList={this.state.JournalEntryList} />
      </div>
      </div>
    );
  }
}

export default App;
