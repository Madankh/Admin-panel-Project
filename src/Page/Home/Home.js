import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import "./home.css"
export default function Home() {
  return (
    <div style={{backgroundColor:"black" , overflow:'hidden'}}>
      <div className='mainHeaderContainer'>
        <Sidebar/>
        <Navbar/>
        
      </div>
    </div>
  )
}
