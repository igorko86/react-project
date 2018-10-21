import React from 'react'
import './headerContent.css'


export default function HeaderContent(props){
  const {onOpenTab,contents,active} = props;
  const buttons = contents.map(content=>(
        <div
          className = {(active===content.id-1)?"header_btn active":"header_btn"}
          key={content.id}
          onClick={()=>onOpenTab(content.id)}
        >
          <img className="iconImg" src={content.icon} alt={content.alt} />
        </div>

    ))
  return(
    <div className="header_content">
        { buttons }
    </div>
  )
}
