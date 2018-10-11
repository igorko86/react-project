import React,{Component} from 'react';
import Location from './Location'
import FormComment from './FormComment';
import Comments from './Comments';
export default class Footer extends Component{
  state={
    comments:[{id:1,
              user:"vasya",
              text:"удалятся та li, в которой эта кнопочка находится."
            }]
  }
  handleAddComment=(noteNew)=>{
    this.setState({
      comments:[...this.state.comments,noteNew]
    })
  }
  render(){
    return(
      <div className="footer">
        <Comments comments={this.state.comments} />
        <FormComment onAddComment={this.handleAddComment} />
        <Location />

      </div>
    )
  }
}
