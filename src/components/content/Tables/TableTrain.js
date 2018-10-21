import React,{Component} from 'react';

import Buttons from './Buttons'
import TableBody from './TableBody'
import trains from '../../TabTrainInfo';
import './TabTrain.css'

export default class TableTrain extends Component{
  state = {
    way: ""
  }
  onShowTrainTo=(train)=>{
  this.setState({
    way:train
  })
  }

  render(){
    let renderTrains ;
    this.state.way == ""
      ?renderTrains = trains
      :renderTrains = trains.filter(train=>train.way===this.state.way)
    return(
        <div className="wraper-table">
          <Buttons onShowTrainTo = {this.onShowTrainTo}/>
          <table className="table">
            <thead>
               <tr>
                 <th ></th>
                 <th >№</th>
                 <th >Маршрут</th>
                 <th >Прибуття</th>
                 <th >Стоянка</th>
                 <th >Відправлення</th>
               </tr>
            </thead>
            <TableBody trains = {renderTrains}/>
          </table>
        </div>
    )
  }

}
