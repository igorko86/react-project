import React,{Component} from 'react';
import Location from './Location'
import FormComment from './FormComment';
import Comments from './Comments';
import "./footer.css"

export default class Footer extends Component{
  state={
    comments:[]
  }
  handleAddComment=(commentNew)=>{
    this.setState({
      comments:[...this.state.comments,commentNew]
    })
  }
  saveLocalStorage=()=>{
    const comments = JSON.stringify(this.state.comments);
    localStorage.setItem("comments",comments)
  }
  render(){
    return(
      <div className="footer">
        <Comments comments={this.state.comments} />
        <div className="wraper_Form_Location">
          <FormComment onAddComment={this.handleAddComment} />
          <Location />
        </div>
      </div>
    )
  }
  componentDidMount(){
    const comments = JSON.parse(localStorage.getItem("comments"));
    if(comments){
      this.setState({
        comments: comments
      })
    }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState !== this.state.comments)this.saveLocalStorage();
  }
}
