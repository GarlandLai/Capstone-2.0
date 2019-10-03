import React from 'react';
import Journal from './Journal';
import PropTypes from 'prop-types';
import JournalDetail from './JournalDetail'

function JournalList(props) {
  let optionalContent = null;
  if (props.selectedEntry !=null) {
    optionalContent = <JournalDetail onEdit={props.onEdit} onUpdate={props.onUpdate} selectedEntry={props.selectedEntry} onDelete={props.onDelete}/>
  }
  console.log(props.selectedEntry);
  return (

    <div className='container' id='journals'>
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
  selectedEntry: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onUpdate: PropTypes.func
};

export default JournalList;
