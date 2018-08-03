import React from 'react';

const validation = (props) => {
  let text;
  if(props.length < 5){
    text = 'Text Too Short!';
  }
  else if(props.length >= 5) {
    text = 'Text Long Enough!';
  }
  return (

    <div className='Validation'>
    <p>{text}</p>
    </div>
  );
}
export default validation;
