import React,{Component} from 'react';
import './footer.css'
export default class Comments extends Component{

  render(){

    const {comments} = this.props
    return(
      <div>
        {comments.map(comment=>(
              <div className="wraper_comments" key={comment.id}>
                <h4 className="comments_h4">{comment.user}</h4>
                <p className="comments_p">{comment.text}</p>
              </div>
            )
          )
        }
      </div>
    )
  }
}
