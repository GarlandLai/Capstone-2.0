import React from 'react';
import PropTypes from 'prop-types';

export default function JournalDetail(props) {
  return (
    <div>
      <hr/>
        <h2>Journal #{props.selectedEntry.id} - {props.selectedEntry.created_at}</h2>
        <h4>{props.selectedEntry.prompt1}</h4>
        <h4>{props.selectedEntry.prompt2}</h4>
        <h4>{props.selectedEntry.prompt3}</h4>
        <h4>{props.selectedEntry.content}</h4>
        <button onClick={props.onEdit}>Edit Entry</button>
        <button onClick={props.onDelete}>Delete Entry</button>
      <hr />
    </div>
  );
}

JournalDetail.propTypes = {
  selectedEntry: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}