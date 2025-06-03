import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
          <img src='/logo.svg' alt='logo' />
           <div className='header__search'>
            <SearchOutlinedIcon/>
            <input type='text'/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home" href="/home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" href="/my-network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs " href="/jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging" href="/messaging"/>
            <HeaderOption Icon={CircleNotificationsSharpIcon} title="Notifications"/>
            <HeaderOption avatar="https://cdn.dribbble.com/users/1600854/screenshots/10838441/media/b60ab332b46161561702a1468cd4c286.jpg" title='me'/>
        </div>
    </div>
  )
}

export default Header