import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditJournalEntry from './EditJournalEntry';
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid grey;
  box-shadow: 2px 4px grey;
  border-radius: 5px;
  background-color: lightgrey;
`;

const Button = styled.button`
  margin: 15px;
  padding: 5px;
`;

const H1 = styled.h1`
  margin: 15px;
`;

const H4 = styled.h4`
  padding: 5px;
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

    console.log('journal render', this.props)
  return (
    <Container>
      <H1>Journal #{this.props.selectedEntry.id}</H1>
      <H4>{this.props.selectedEntry.prompt1}</H4>
      <H4>{this.props.selectedEntry.prompt2}</H4>
      <H4>{this.props.selectedEntry.prompt3}</H4>
      <H4>{this.props.selectedEntry.content}</H4>
      <Button onClick={this.handleToggle}>Edit Entry</Button>
      <Button onClick={this.props.onDelete}>Delete Entry</Button>
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