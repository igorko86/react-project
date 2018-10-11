import React from 'react'
import './headerContent.css'

export default function HeaderContent(props){
  console.log(props.contents)
  return(
    <div className="header_content">

        {props.contents.map(content=><div
          className="header_btn"
          key={content.id}
          onClick={props.toggleContent(content.id)}
          >
          <img className="iconImg" src={content.icon} alt={content.alt} />

        </div>)
      }
    </div>
  )
}
