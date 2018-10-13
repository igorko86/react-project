import React,{Component} from 'react';


export default class FormComment extends Component{
  state={
    text:"",
    user:""
  }
  handleText=(e)=>{
    this.setState({
      text: e.target.value
    })
  }
  handleUser=(e)=>{
    this.setState({
      user: e.target.value
    })
  }
  handleAddComment=()=>{

    const newComment={
      text:this.state.text,
      user:this.state.user,
      id: Date.now()
    }
    this.props.onAddComment(newComment);
    this.updateStatenewComment()
  }
  updateStatenewComment=()=>{
    this.setState({
      user: "",
      text: ""
    })
  }
  render(){

    return(
      <div>
          <input type="text" value={this.state.user} onChange={this.handleUser} />
          <textarea type="text"
            rows={6}
             cols={43}
             value={this.state.text}
            placeholder="Enter your Note..."
            onChange={this.handleText}
          />
          <button onClick={this.handleAddComment}>Відправити</button>
      </div>
    )
  }
}
