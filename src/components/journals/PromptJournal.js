import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class PromptJournal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt1: "",
      prompt2: "",
      prompt3: "",
      content: ""
    }
  }

  handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    const entry = {prompt1: this.state.prompt1, prompt2: this.state.prompt2, prompt3: this.state.prompt3, content: this.state.content}
    axios.post('http://localhost:3000/entries',(entry))
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
    this.props.onNewEntry(entry);
  }
 

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} >
          <h4 className="grey-text text-darken-3">Meditation Journal</h4>
          <div className="input-field">
            <label htmlFor="prompt1">How do you feel about your meditation experience?</label>
            <input type="text" id="prompt1" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="prompt2">What did you notice about your thoughts?</label>
            <input type="text" id="prompt2" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="prompt3">Did you notice any sensations or discomfort? Where?</label>
            <input type="text" id="prompt3" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">This is where you can write anything you want!</label>
            <textarea className="materialize-textarea"  id="content" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

PromptJournal.propTypes = {
  onNewEntry: PropTypes.func,
};


export default PromptJournal;