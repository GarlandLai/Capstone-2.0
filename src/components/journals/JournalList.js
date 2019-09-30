import React from 'react';
import JournalDetails from './JournalDetails';
import PropTypes from 'prop-types';

function JournalList(props) {
  console.log(props)

  let selectEntryContent = null;
  if (props.onSelectEntry != null) {
    selectEntryContent = < JournalDetails />;
  }

  return (
    <div className='container'>
      {props.journalList.map(entry => {
        return (

          <div className="single-list" key={entry.id}>
            <h2 onClick={() => {alert("Clicked on Journal #" + entry.id)}}>Journal #{entry.id} - {entry.created_at}</h2>
            <h4>{entry.prompt1}</h4>
            <h4>{entry.prompt2}</h4>
            <h4>{entry.prompt3}</h4>
            <h4>{entry.content}</h4>
          </div>
        )
      })}

    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
  onSelectEntry: PropTypes.func.isRequired
};

export default JournalList;
