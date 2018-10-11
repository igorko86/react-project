import React,{Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import  '../../css/header.css'
import Logo from '../.././img/Ivanichi-Logo.png';

import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    openDrawer:false,
    headerShow: false
  }
  componentDidMount(){
    window.addEventListener("scroll",this.handleScroll)
  }
  handleScroll=()=>{
    if(window.scrollY>0){
      console.log("y");
      this.setState({
        headerShow: true
      })
    }else{
      console.log("n");
      this.setState({
        headerShow: false
      })
    }
  }
  toggleDrawer=(value)=>{
    this.setState({
      openDrawer:value
    })
  }
  render(){
    return(

          <AppBar
            position="fixed"
            style={{maxWidth: "980px",position:"fixed ",right: "auto",background:this.state.headerShow?"#2f2f2f":"transparent",

                    color: this.state.headerShow?"white":"black",
                    boxShadow:"none",
                    padding:"10px"}}
          >
            <Toolbar>
              <div className="header_logo">
                <div className="font_righteous ">
                  <div className="wraper_logo">
                    <img className="img_logo" src={Logo} alt="Логотип" />
                     <h1 className="h1_Logo">Іваничі</h1>
                  </div>
                </div>
                <div className="header_logo_title font_righteous">селище міського типу</div>
              </div>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={()=>{this.toggleDrawer(true)}}
                >
                  <MenuIcon />
                </IconButton>
                <SideDrawer
                  open = {this.state.openDrawer}
                  onClose ={(value)=>this.toggleDrawer(value)}
                />
            </Toolbar>
          </AppBar>
    )
  }
}
export default Header
