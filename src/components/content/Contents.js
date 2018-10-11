import React,{Component} from 'react';
import HeaderContent from './HeaderContent'
import ContentItem from './ContentItem';
import './contents.css';

export default class Content extends Component{

  state={
    IsOpen:null
  }

  render(){
    const {contents} = this.props;

    return(
      <div className="contents">
        <HeaderContent  contents = {contents} toggleContent = {this.toggleContent}></HeaderContent>
        <ContentItem isOpen = {this.state.isOpen} contentsItem={contents}/>
      </div>
    )
  }
  toggleContent=isOpen=>ev=>{
    this.setState({
      isOpen
    })
  }

}
