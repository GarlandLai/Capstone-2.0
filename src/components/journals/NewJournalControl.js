import React from 'react';
import FormConfirmation from './FormConfirmation';
import CreateJournal from './CreateJournal';
import PropTypes from 'prop-types';

class NewJournalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promptVisibleOnPage: false,
    };
    this.handleFormConfirmation = this.handleAdminConfirmation.bind(this);
  }

  handleAdminConfirmation() {
    this.setState({ promptVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.promptVisibleOnPage) {
      currentlyVisibleContent = <CreateJournal onNewKegCreation={this.props.onNewKegCreation}/>;
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
  onNewKegCreation: PropTypes.func,
};

export default NewJournalControl;
