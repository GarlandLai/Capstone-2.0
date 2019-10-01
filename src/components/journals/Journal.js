import React from "react";
import PropTypes from 'prop-types';

function Journal(props) {

  return (
  <div>
<h2 onClick={() => {alert("Clicked on Journal #" + props.id)}}>Journal Entry #{props.id}</h2>
<h4>{props.prompt1}</h4>
<h4>{props.prompt2}</h4>
<h4>{props.prompt3}</h4>
<h4>{props.content}</h4>
</div>
  );
};

Journal.propTypes = {
  prompt1: PropTypes.string,
  prompt2: PropTypes.string,
  prompt3: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number
}

export default Journal;


