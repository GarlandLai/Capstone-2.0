import React from 'react';
import '../App.css';
import Header from './Header';
import Navigation from './Navigation';
import Meditate from './meditate/Meditate';
import NewJournalControl from './journals/NewJournalControl';
import JournalList from './journals/JournalList';
import axios from 'axios';
import About from './About';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			JournalEntryList: [],
			selectedEntry: null,
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSelectEntry = this.handleSelectEntry.bind(this);
	}

	componentDidMount() {
		axios
			// .get('http://localhost:3000/entries')
			.get('https://salty-reef-45366.herokuapp.com/entries')
			.then((response) => {
				this.setState({ JournalEntryList: response.data });
			})
			.catch((error) => console.log(error));
	}

	handleUpdate() {
		axios
			// .get('http://localhost:3000/entries')
			.get('https://salty-reef-45366.herokuapp.com/entries')
			.then((response) => {
				this.setState({ JournalEntryList: response.data });
			})
			.catch((error) => console.log(error));
	}

	handleSelectEntry(entry) {
		this.setState({ selectedEntry: entry });
	}

	handleDelete = () => {
		let id = this.state.selectedEntry.id;
		axios
			// .delete(`http://localhost:3000/entries/${id}`)
			.delete(`https://salty-reef-45366.herokuapp.com/entries/${id}`)
			.then((response) => {
				this.handleUpdate();
				this.setState({ selectedEntry: null });
			})
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div className="App">
				<div id="nav">
					<Navigation />
				</div>
				<div id="header">
					<Header id="header" />
				</div>
				<About id="about" />
				<div id="meditate">
					<Meditate />
					<NewJournalControl
						onUpdate={this.handleUpdate}
						onNewEntry={this.handleNewEntry}
					/>
				</div>
				<div id="journals">
					<JournalList
						id="journals"
						onDelete={this.handleDelete}
						onEdit={this.handleEdit}
						onSelectEntry={this.handleSelectEntry}
						journalList={this.state.JournalEntryList}
						selectedEntry={this.state.selectedEntry}
						onUpdate={this.handleUpdate}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
