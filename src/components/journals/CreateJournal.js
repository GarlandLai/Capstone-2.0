import React, { Component } from 'react';

class CreateJournal extends Component {
  
  render() {
    return (
      <div className="container">
        <form>
          <h4 className="grey-text text-darken-3">Meditation Journal</h4>
          <div className="input-field">
            <label htmlFor="prompt1" id="prompt1">How do you feel about your meditation experience?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="prompt2" id="prompt2">What did you notice about your thoughts?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="prompt3" id="prompt3">Did you notice any sensations or discomfort? Where?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="content" id="content">This is where you can write anything you want!</label>
            <textarea className="materialize-textarea"/>
          </div>
          <div className="input-field">
            <button>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateJournal;