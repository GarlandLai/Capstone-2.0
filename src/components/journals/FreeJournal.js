import React, { Component } from 'react';

class FreeJournal extends Component {
    state = {
      content: ''
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createJournal(this.state)
    }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} >
          <div className="input-field">
            <label htmlFor="content">Write anything you want!</label>
            <textarea className="materialize-textarea"  id="content" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FreeJournal;