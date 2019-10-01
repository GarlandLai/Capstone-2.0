import React from 'react';
import PropTypes from 'prop-types';

export default function JournalDetail(props) {
  return (
    <div>
      <hr/>
        <h4>{props.selectedEntry.prompt1}</h4>
        <h4>{props.selectedEntry.prompt2}</h4>
        <h4>{props.selectedEntry.prompt3}</h4>
        <h4>{props.selectedEntry.content}</h4>
      <hr />
    </div>
  );
}

JournalDetail.propTypes = {
  selectedEntry: PropTypes.object
}