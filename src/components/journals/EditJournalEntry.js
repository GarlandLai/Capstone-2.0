import React, { Component } from 'react';
import  { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class EditJournaEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    console.log(this.props)
    return(
      <Modal
      show={this.props.show} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Journal Entry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="containter">
          Add Form 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onToggle}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

EditJournaEntry.propTypes = {
  onToggle: PropTypes.func,
}
export default EditJournaEntry;