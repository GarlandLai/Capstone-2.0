import React from 'react';
import PropTypes from 'prop-types';

function FormConfirmation(props){
  return (
    <div>
      <button onClick={props.onFormConfirmation}>Add Journal Entry</button>
    </div>
  );
}

FormConfirmation.propTypes = {
  onFormConfirmation: PropTypes.func
}

export default FormConfirmation;
