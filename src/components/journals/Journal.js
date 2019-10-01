import React from "react";
import PropTypes from 'prop-types';

function Journal(props) {
  const journalInfo = 
  <div>
    <h2>Journal #{props.id}</h2>
    <h4>{props.prompt1}</h4>
    <h4>{props.prompt2}</h4>
    <h4>{props.prompt3}</h4>
    <h4>{props.content}</h4>
  </div>

  return (
  // consolelog on props.id works below..
  <div onClick={() => {props.onSelectEntry({ prompt1: props.prompt1, prompt2: props.prompt2, prompt3: props.prompt3, content: props.content, id: props.id});}}>
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
  onSelectEntry: PropTypes.func
}

export default Journal;


