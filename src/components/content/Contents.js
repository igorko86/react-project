import React,{Component} from 'react';
import HeaderContent from './HeaderContent'
import ContentTab from './ContentTab';
import './contents.css';

export default class Content extends Component{
  state={
    isOpen:0
  }
  onOpenTab=(id)=>{
    this.setState({
      isOpen: id - 1
    })
  }
  render(){
    const {contents} = this.props;
    const id = this.state.isOpen;
    return(
      <div className="contents">
        <HeaderContent
          active={id}
          contents = {contents}
          onOpenTab = {this.onOpenTab}>
        </HeaderContent>
        <ContentTab isOpen = {contents[id]} />
      </div>
    )
  }


}
