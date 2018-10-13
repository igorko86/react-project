import React,{Component} from 'react';
import './footer.css';

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
    if(this.state.text.length === 0 || this.state.user.length === 0 ){return}
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
      <div className="wraper_form">
          <label>Ім'я:
            <input className="footer_input"
                   type="text"
                   placeholder="Введіть ім'я"
                   value={this.state.user}
                   onChange={this.handleUser}
             />
          </label>
          <textarea className="footer_textarea" type="text"
            rows={6}
             cols={43}
             value={this.state.text}
            placeholder="Введіть Ваш коментар..."
            onChange={this.handleText}
          />
          <button onClick={this.handleAddComment}>Відправити</button>
      </div>
    )
  }
}
