import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
        <Avatar/>
            <div className='post__info'>
            <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
          <InputOption Icon={ThumbUpAltIcon} title='Like'
          color='gray'/>
           <InputOption Icon={ChatBubbleIcon} title='Comment'
          color='gray'/>
           <InputOption Icon={ShareIcon} title='Share'
          color='gray'/>
        </div>

    </div>
  )
}

export default Post