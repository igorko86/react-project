import React from 'react';

export default function Content(props){
  const {title,text} = props.content;
  return(
    (
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    )
  )
}
