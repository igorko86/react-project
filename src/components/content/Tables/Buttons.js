import React from 'react';

export default function Buttons(props){
  const {onShowTrainTo} = props;
  return(
    <div>
      <button onClick={()=>onShowTrainTo("")}>All</button>
      <button onClick={()=>onShowTrainTo("toKovel")}>Click 1</button>
      <button onClick={()=>onShowTrainTo("toLviv")}>Click 2</button>
    </div>
  )
}
