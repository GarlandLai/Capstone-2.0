import React from 'react';
import Journal from './Journal';
import PropTypes from 'prop-types';

function JournalList(props) {
  console.log(props)

  return (
    <div className='container'>
      {props.journalList.map((journal) =>
        <Journal prompt1={journal.prompt1}
          prompt2={journal.prompt2}
          prompt3={journal.prompt3}
          content={journal.content}
          id={journal.id} />
      )}
    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
  onSelectEntry: PropTypes.func.isRequired
};

export default JournalList;
