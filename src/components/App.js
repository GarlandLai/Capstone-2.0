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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSelectEntry = this.handleSelectEntry.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/entries')
    .then(response => {
      console.log(response)
      this.setState(
        {JournalEntryList: response.data},
        () => console.log("state update", this.state.JournalEntryList) )
    })
    .catch(error => console.log(error))
  }

  handleUpdate() {
    axios.get('http://localhost:3000/entries')
    .then(response => {
      console.log(response)
      this.setState(
        {JournalEntryList: response.data},
        () => console.log("State Update", this.state.JournalEntryList) )
    })
    .catch(error => console.log(error))
  }
    
  handleSelectEntry(entry){
    this.setState({ selectedEntry: entry });
  }

  handleDelete = () => {
    let id = this.state.selectedEntry.id;
    axios.delete(`http://localhost:3000/entries/${id}`)
    .then(response => {
      console.log(response)
      this.handleUpdate();
      this.setState({selectedEntry: null})
    })
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.JournalEntryList)
    return (
      <div className="App">
        <Navigation />
        <Header />

        <Meditate />
        <NewJournalControl onUpdate={this.handleUpdate} onNewEntry={this.handleNewEntry} />
      <div className='container'>
        <JournalList onDelete={this.handleDelete} onEdit={this.handleEdit} onSelectEntry={this.handleSelectEntry} journalList={this.state.JournalEntryList} selectedEntry={this.state.selectedEntry} onUpdate={this.handleUpdate} />
      </div>
      </div>
    );
  }
}

export default App;
