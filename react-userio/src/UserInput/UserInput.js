import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    margin:'auto',
    border: '5px dotted blue',
    color: 'red',
  };
  return (
    <input type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}/>

  );
};

export default userInput;
