import React from 'react';
import FormConfirmation from './FormConfirmation';
import PromptJournal from './PromptJournal';
import PropTypes from 'prop-types';

class NewJournalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promptVisibleOnPage: false,
    };
    this.handleFormConfirmation = this.handleFormConfirmation.bind(this);
  }

  handleFormConfirmation() {
    this.setState({ promptVisibleOnPage: true });
  }

  clearForm = () => {
    document.getElementById("addForm").reset();
    console.log(this.props.promptVisibleOnPage)
    this.setState({ promptVisibleOnPage: false})
    console.log(this.props.promptVisibleOnPage)
  }
 

  render() {
    let currentlyVisibleContent = null;
    if (this.state.promptVisibleOnPage) {
      currentlyVisibleContent = <PromptJournal onUpdate={this.props.onUpdate} onNewEntry={this.props.onNewEntry} promptVisibleOnPage={this.state} clearForm={this.clearForm}/>;
    } else {
      currentlyVisibleContent = <FormConfirmation onFormConfirmation={this.handleFormConfirmation} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewJournalControl.propTypes = {
  onNewEntry: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default NewJournalControl;
