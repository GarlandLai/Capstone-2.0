import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const JournalCard = styled.div`
  display: inline-flex;
  font-size: 30px;
  font-weight: 600;
  border: 1px solid grey;
  box-shadow: 2px 4px grey;
  padding 20px;
  margin: 5px;
  width: 200px;
  height: auto;
`;

function Journal(props) {
  const journalInfo = 
  <JournalCard>
    <p>Journal #{props.id}</p>
  </JournalCard>

  return (
  <div onClick={() => {props.onSelectEntry({ prompt1: props.prompt1, prompt2: props.prompt2, prompt3: props.prompt3, content: props.content, id: props.id, created_at: props.created_at});}}>
  {journalInfo}
  </div>
  );
};

Journal.propTypes = {
  prompt1: PropTypes.string,
  prompt2: PropTypes.string,
  prompt3: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
  created_at: PropTypes.string,
  onSelectEntry: PropTypes.func
}

export default Journal;


