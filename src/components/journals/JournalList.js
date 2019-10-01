import React from 'react';
import Journal from './Journal';
import PropTypes from 'prop-types';
import JournalDetail from './JournalDetail'

function JournalList(props) {
  let optionalContent = null;
  if (props.selectedEntry !=null) {
    optionalContent = <JournalDetail selectedEntry={props.selectedEntry}/>
  }
  console.log(props.selectedEntry);
  return (

    <div className='container'>
      {optionalContent}
      {props.journalList.map((journal) =>
        <Journal prompt1={journal.prompt1}
          prompt2={journal.prompt2}
          prompt3={journal.prompt3}
          content={journal.content}
          created_at={journal.created_at}
          onSelectEntry={props.onSelectEntry}
          id={journal.id} />
      )}
    </div>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array,
  onSelectEntry: PropTypes.func,
  selectedEntry: PropTypes.object
};

export default JournalList;
