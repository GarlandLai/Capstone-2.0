import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditJournalEntry from './EditJournalEntry';
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border: 1px solid grey;
  box-shadow: 4px 4px grey;
  border-radius: 5px;
  background-color: lightgrey;
`;

const H1 = styled.h1`
  margin: 15px;
`;

const H4 = styled.h4`
  padding: 5px;
`;

const CloseButton = styled.button`
  color: black;
  font-size: 24px;
  background: none;
  float: right;
  padding: 5px 10px;
  margin: 0;

  :hover {
    background-color: grey;
    border-radius: 45px;
  }
`;

class JournalDetail extends Component {
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
  return (
    <Container>
      <H1>Journal #{this.props.selectedEntry.id}
        <CloseButton onClick={()=> this.props.onSelectEntry(null)}>X</CloseButton>
      </H1>
      <H4>{this.props.selectedEntry.prompt1}</H4>
      <H4>{this.props.selectedEntry.prompt2}</H4>
      <H4>{this.props.selectedEntry.prompt3}</H4>
      <H4>{this.props.selectedEntry.content}</H4>
      <button onClick={this.handleToggle}>Edit Entry</button>
      <button onClick={this.props.onDelete}>Delete Entry</button>
      <EditJournalEntry show={this.state.setModalShow} onToggle={this.handleToggle}  onUpdate={this.props.onUpdate} onSelectEntry={this.props.onSelectEntry} selectedEntry={this.props.selectedEntry} />
    </Container>
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