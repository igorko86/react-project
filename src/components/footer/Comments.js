import React,{Component} from 'react';

export default class Comments extends Component{

  render(){
    
    const {comments} = this.props
    return(
      <div>
        {comments.map(comment=>(
              <div key={comment.id}>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
              </div>
            )
          )
        }
      </div>
    )
  }
}
