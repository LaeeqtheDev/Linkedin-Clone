import React, { useState, useEffect } from 'react'
import './Feed.css'
import EditIcon from '@mui/icons-material/Edit';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';



function Feed() {




  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <EditIcon/>
                
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7FC15E" />
                
            </div>
        </div>

            <Post
           
            />
    
    </div>
  )
}

export default Feed