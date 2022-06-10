import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
     <div className='sidebar__recentItem'>
       <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
     </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoiEi-nZi4k0wSWGno9aOMzOE_EN5Yn6gaQ&usqp=CAU'alt=''/>
          <Avatar className='sidebar__avatar'/>
          <h2>Syed Laeeq Ahmed</h2>
            <h4>laeeqe@icloud.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stats'> 
            <p>Who Viewed You</p>
            <p className='sidebar__statNumber'>2.5k</p>
            </div>
            <div className='sidebar__stats'> 
            <p>Views on post</p>
            <p className='sidebar__statNumber'>10.5k</p>
            </div>
            <div className='sidebar__bottom '>
              <p>Recent</p>
              {recentItem("reactjs")}
              {recentItem("programming")}
              {recentItem("softwareengineering")}
              {recentItem("deisgn")}
              {recentItem("developer")}
            </div>
        </div>
    </div>
  )
}

export default Sidebar