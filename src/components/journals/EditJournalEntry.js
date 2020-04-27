import React, { Component } from 'react';
import  { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './modal.css'
import styled from "styled-components";

const StyledPrompt = styled.label`
  color: black;
`

class EditJournaEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt1: this.props.selectedEntry.prompt1,
      prompt2: this.props.selectedEntry.prompt2,
      prompt3: this.props.selectedEntry.prompt3,
      content: this.props.selectedEntry.content
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
       [e.target.id]: e.target.value
    })
  }

  handleEdit = (e) => {
    e.preventDefault();
    let id = this.props.selectedEntry.id;
    const entry = {prompt1: this.state.prompt1, prompt2: this.state.prompt2, prompt3: this.state.prompt3, content: this.state.content, id: id}
    axios.put(`http://localhost:3000/entries/${id}`,(entry))
    .then(response => {
      console.log(response)
      this.props.onUpdate();
      this.props.onToggle();
      this.props.onSelectEntry(entry);
    })
    .catch(error => console.log(error))
  }


  render(props) {
    console.log(this.props)
    return(
      <Modal
      {...props}
      show={this.props.show} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Journal {this.props.selectedEntry.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containter">
        <form  id="addForm">
            <StyledPrompt htmlFor="prompt1">How do you feel about your meditation experience?</StyledPrompt>
            <input type="text" id="prompt1" onChange={this.handleChange} placeholder={this.state.prompt1}/>
            <StyledPrompt htmlFor="prompt2">What did you notice about your thoughts?</StyledPrompt>

            <input type="text" id="prompt2" onChange={this.handleChange} placeholder={this.state.prompt2}/>
      
            <StyledPrompt htmlFor="prompt3">Did you notice any sensations or discomfort? Where?</StyledPrompt>
            <input type="text" id="prompt3" onChange={this.handleChange} placeholder={this.state.prompt3} />

            <StyledPrompt htmlFor="content">This is where you can write anything you want!</StyledPrompt>
            <textarea className="materialize-textarea"  id="content" onChange={this.handleChange} placeholder={this.state.content}/>

        </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.handleEdit}>Save Changes</Button>
        <Button variant="danger" onClick={this.props.onToggle}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

EditJournaEntry.propTypes = {
  onToggle: PropTypes.func,
  selectedEntry: PropTypes.object,
  onUpdate: PropTypes.func,
  onSelectEntry: PropTypes.func
}

export default EditJournaEntry;