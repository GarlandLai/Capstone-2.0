import React from 'react';
import PropTypes from 'prop-types';

function FormConfirmation(props){
  return (
    <div>
      <p>Please choose a journal entry type:</p>
      <button onClick={props.onFormConfirmation}>Prompts</button>
    </div>
  );
}

FormConfirmation.propTypes = {
  onFormConfirmation: PropTypes.func
}

export default FormConfirmation;
