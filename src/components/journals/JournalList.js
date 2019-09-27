import React from 'react';
import JournalDetails from './JournalDetails';
import PropTypes from 'prop-types';

function JournalList() {
  console.log("hi");
  return (
    <div className='container'>
      < JournalDetails />
    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
};

export default JournalList;
