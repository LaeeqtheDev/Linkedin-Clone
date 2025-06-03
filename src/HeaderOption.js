import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, href }) {
  const content = (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__icon' src={avatar} />}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );

  return href ? (
    <a href={href} className="headerOption__link">
      {content}
    </a>
  ) : (
    content
  );
}

export default HeaderOption;
