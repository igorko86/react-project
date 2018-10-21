import React from 'react';

export default function TableBody(props){
  const row = props.trains.map((train,index)=>{
    return (
      <tr key={train.id}>
        <td><i className="fas fa-subway"></i></td>
        <td>{index+1}</td>
        <td>{train.name}</td>
      </tr>)
  })
  return(
    <tbody>
     {row}
    </tbody>
  )
}
