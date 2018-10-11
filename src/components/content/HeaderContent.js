import React from 'react'

export default function HeaderContent(props){
  return(
    <div>
      {props.contents.map(content=><button key={content.id} onClick={props.toggleContent(content.id)}>Click</button>)}
    </div>
  )
}
