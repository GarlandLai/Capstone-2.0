import React from 'react';
import JournalDetails from './JournalDetails';
import PropTypes from 'prop-types';

function JournalList(props) {
  console.log(props)
  return (
    <div className='container'>
      < JournalDetails />
      {props.journalList.map(journalList => {
        return (
          <div className="single-list" key={journalList.id}>
            <h3>{journalList.created_at}</h3>
            <h4>{journalList.prompt1}</h4>
            <h4>{journalList.prompt2}</h4>
            <h4>{journalList.prompt3}</h4>
            <h4>{journalList.content}</h4>
          </div>
        )
      })}

    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
};

export default JournalList;
