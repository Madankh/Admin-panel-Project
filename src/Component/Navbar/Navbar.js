import React from 'react'
import "./Navbar.css";
import SearchIcon from "../../Icons/icons8-search-30.png";
import CartIcon from "../../Icons/icons8-shopping-cart-30.png";
import Notification from "../../Icons/icons8-notification-64.png";
import ProfileImage from "../../Icons/Profile.jpg";
import Home from '../Home/Home';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='subnavbar'>
      <div>
        <p style={{color:"white"   , marginLeft:"14px" , marginTop:12}}>Admin</p>
      </div>
      <div style={{display:"flex" , alignItems:"center"}}>
        <img src={`${SearchIcon}`} className="navbarIcons" alt="" />
        <img src={`${CartIcon}`} className="navbarIcons" alt="" />
        <img src={`${Notification}`} className="navbarIcons" alt="" />
        <div style={{display:"flex" , alignItems:'center' , marginLeft:20}}>
          <img style={{width:30 , height:30 , marginRight:4 , borderRadius:"50%"}} src={`${ProfileImage}`} alt="" />
          <p style={{color:"#1ED97B" , marginRight:20}}>Suman</p>
        </div>
      </div>
      </div>
      <Home/>
      
    </div>
  )
}
