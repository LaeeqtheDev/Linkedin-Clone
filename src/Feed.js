import React, { useState, useEffect } from 'react';
import './Feed.css';
import EditIcon from '@mui/icons-material/Edit';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([
    {
      name: 'Syed Laeeq Ahmed',
      description: 'Frontend Developer at Groove Inc.',
      message: 'Just completed a huge UI revamp using React and Tailwind!',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Areeba Fatima',
      description: 'UI/UX Designer at PixelBox',
      message: 'Design trends for 2025 are looking clean, minimal, and bold. ✨',
      photoUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      name: 'Daniyal Ali',
      description: 'Full Stack Developer | Node.js & React',
      message: 'Just deployed my new SaaS project to Vercel 🎉🚀',
      photoUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  ]);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditIcon />
          <input type="text" placeholder="Start a post" />
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>

      {/* Posts list */}
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          description={post.description}
          message={post.message}
          photoUrl={post.photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
