import React,{Component} from 'react';

import './ContentTab.css';

import TableTrain from './Tables/TableTrain';


export default class ContentTab extends Component{
  render(){
    const {title,text} = this.props.isOpen;
    return(
        <div>
          <div className="wraper-title">
            <i className="fas fa-calendar-alt fa-3x" style={{background:'MistyRose'}}></i>
            <h3>{title}</h3>
          </div>

          <TableTrain />
        </div>
    )
  }

}
