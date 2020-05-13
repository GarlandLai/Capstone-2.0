import React from 'react';
import Journal from './Journal';
import PropTypes from 'prop-types';
import JournalDetail from './JournalDetail'

class JournalList extends React.Component {
  constructor(props){
    super(props)
  }
  
  render () {
    const props = this.props;
    console.log('journal list render',props.selectedEntry);
    let optionalContent = null;
    if (props.selectedEntry !=null) {
      optionalContent = <JournalDetail onSelectEntry={props.onSelectEntry} onEdit={props.onEdit} onUpdate={props.onUpdate} selectedEntry={props.selectedEntry} onDelete={props.onDelete}/>
    }
    return (   
        <div className='container' >
        {optionalContent}
      <h1>Click on the Journal you'd like see!</h1>
        <br/>
        {props.journalList.map((journal) =>
          <Journal 
            prompt1={journal.prompt1}
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
