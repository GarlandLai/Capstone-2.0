import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditJournalEntry from './EditJournalEntry';

class JournalDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setModalShow: false
    }
  }

  handleToggle = () => {
    this.setState({ setModalShow: !this.state.setModalShow })
   }


  render() {

    console.log('journal render', this.props)
  return (
    <div>
        <h2>Journal #{this.props.selectedEntry.id} - {this.props.selectedEntry.created_at}</h2>
        <h4>{this.props.selectedEntry.prompt1}</h4>
        <h4>{this.props.selectedEntry.prompt2}</h4>
        <h4>{this.props.selectedEntry.prompt3}</h4>
        <h4>{this.props.selectedEntry.content}</h4>
        <button variant='primary' onClick={this.handleToggle}>Edit Entry</button>
        <button onClick={this.props.onDelete}>Delete Entry</button>
      <EditJournalEntry show={this.state.setModalShow} onToggle={this.handleToggle}  onUpdate={this.props.onUpdate} onSelectEntry={this.props.onSelectEntry} selectedEntry={this.props.selectedEntry} />
    </div>
    );
  } 
}

JournalDetail.propTypes = {
  selectedEntry: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onSelectEntry: PropTypes.func
}

export default JournalDetail;