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

  render() {
    let currentlyVisibleContent = null;
    if (this.state.promptVisibleOnPage) {
      currentlyVisibleContent = <PromptJournal onNewEntry={this.props.onNewEntry}/>;
    } else {
      currentlyVisibleContent = <FormConfirmation onFormConfirmation={ this.handleFormConfirmation } />;
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
};

export default NewJournalControl;
