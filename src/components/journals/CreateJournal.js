import React, { Component } from 'react';

class CreateJournal extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <h4 className="grey-text text-darken-3">Meditation Journal</h4>
          <div className="input-field">
            <label htmlFor="prompt">How do you feel about your meditation experience?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="prompt">What did you notice about your thoughts?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="prompt">Did you notice any sensations or discomfort? Where?</label>
            <input type="text"/>
          </div>

          <div className="input-field">
            <label htmlFor="content">This is where you can write anything you want!</label>
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