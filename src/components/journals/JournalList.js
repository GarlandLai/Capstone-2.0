import React from 'react';
import JournalDetails from './JournalDetails';
import PropTypes from 'prop-types';

function JournalList(props) {
  console.log(props)
  return (
    <div className='container'>
      {props.journalList.map(journalList => {
        return (
          <div className="single-list" key={journalList.id}>
            <h4>{journalList.prompt1}</h4>
            <h4>{journalList.prompt2}</h4>
            <h4>{journalList.prompt3}</h4>
            <h4>{journalList.content}</h4>
          </div>
        )
      })}
      < JournalDetails />
    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
};

export default JournalList;
