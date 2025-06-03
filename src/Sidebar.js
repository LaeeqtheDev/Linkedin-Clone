import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem" key={topic}>
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoiEi-nZi4k0wSWGno9aOMzOE_EN5Yn6gaQ&usqp=CAU"
          alt="Banner"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Syed Laeeq Ahmed</h2>
        <h4>laeeqahmed656@gmail.com</h4>
      </div>

      <div className="sidebar__statsContainer">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">10,500</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p className="sidebar__bottomTitle">Recent</p>
        {['reactjs', 'programming', 'software engineering', 'design', 'developer'].map(recentItem)}
      </div>
    </div>
  );
}

export default Sidebar;
