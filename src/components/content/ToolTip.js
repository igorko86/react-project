import React,{Component} from "react";
import ReactDOM from 'react-dom';
export default class ToolTip extends Component {
  state={
    opacity: false
  }
  toggle=()=>{
    const ToolTipNode = ReactDOM.findDOMNode(this)

    this.setState({
      opacity:!this.state.opacity,
      top: ToolTipNode.offsetTop,
      left: ToolTipNode.offsetLeft
    })
  }
  render(){

    const style ={
      zIndex: (this.state.opacity)?1000:-1000,
      opacity: + this.state.opacity,
    
      top: (this.state.top || 0),
      left: (this.state.left || 0 )
    }
    return(
      <div >
        <div
          onMouseEnter = {this.toggle}
          onMouseOut = {this.toggle}
        >
          {this.props.children}
        </div>
          <div style={{position:"absolute"}} >
          <div style={style}>{this.props.text}</div>
        </div>
      </div>
    )
  }
}
