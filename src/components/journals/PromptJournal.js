import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPrompt = styled.label`
	color: black !important;
`;

const StyledH4 = styled.h4`
	font-size: 40px;
	margin: 40px 0;
`;

class PromptJournal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt1: '',
			prompt2: '',
			prompt3: '',
			content: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		const entry = {
			prompt1: this.state.prompt1,
			prompt2: this.state.prompt2,
			prompt3: this.state.prompt3,
			content: this.state.content,
		};
		axios
			// .post('http://localhost:3000/entries', entry)
			.post('https://salty-reef-45366.herokuapp.com/entries', entry)
			.then((response) => {
				this.props.onUpdate();
				this.props.clearForm();
				console.log(response);
			})
			.catch((error) => console.log(error));
	};

	render() {
		console.log(this.state);
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} id="addForm">
					<StyledH4 className="grey-text text-darken-3">
						Meditation Journal
					</StyledH4>
					<div className="input-field">
						<StyledPrompt htmlFor="prompt1">
							How do you feel about your meditation experience?
						</StyledPrompt>
						<input
							type="text"
							id="prompt1"
							onChange={this.handleChange}
							required
						/>
					</div>

					<div className="input-field">
						<StyledPrompt htmlFor="prompt2">
							What did you notice about your thoughts?
						</StyledPrompt>
						<input type="text" id="prompt2" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<StyledPrompt htmlFor="prompt3">
							Did you notice any sensations or discomfort? Where?
						</StyledPrompt>
						<input type="text" id="prompt3" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<StyledPrompt htmlFor="content">
							This is where you can write anything you want!
						</StyledPrompt>
						<textarea
							className="materialize-textarea"
							id="content"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="input-field">
						<button type="submit">Create</button>
						<button onClick={this.props.clearForm}>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

PromptJournal.propTypes = {
	onNewEntry: PropTypes.func,
	onUpdate: PropTypes.func,
	promptVisibleOnPage: PropTypes.bool,
	clearForm: PropTypes.func,
};

export default PromptJournal;
