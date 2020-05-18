import React from 'react';
import Journal from './Journal';
import PropTypes from 'prop-types';
import JournalDetail from './JournalDetail'
import styled from "styled-components";

const ListContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const JournalTitle = styled.p`
  font-size: 50px;
  text-shadow: darkgrey 7px 7px 7px;
  font-weight: 600;
`;

class JournalList extends React.Component {
  constructor(props){
    super(props)
  }
  
  render () {
    const props = this.props;
    let optionalContent = null;
    if (props.selectedEntry !=null) {
      optionalContent = <JournalDetail onSelectEntry={props.onSelectEntry} onEdit={props.onEdit} onUpdate={props.onUpdate} selectedEntry={props.selectedEntry} onDelete={props.onDelete}/>
    }
    return (
      <div>
        <div className='container'>
        {optionalContent}
          <br />
        <JournalTitle>Journals</JournalTitle>
        </div>
        <br/>
        <ListContainer>
        {props.journalList.map((journal, index) =>
          <Journal 
            key={index}
            prompt1={journal.prompt1}
            prompt2={journal.prompt2}
            prompt3={journal.prompt3}
            content={journal.content}
            created_at={journal.created_at}
            onSelectEntry={props.onSelectEntry}
            id={journal.id} />
          )}
          </ListContainer>
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
