import React from 'react';
import Content from './Content';
export default function ContentItem(props){
  return(
    <div>
      {props.contentsItem.map(content=>props.isOpen===content.id&&<Content key={content.id} content={content}/>)}
    </div>
  )
}
