import React from 'react';
import './header.css';
import { BsFillAwardFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='header'>
      <header className='text'>EMS Certification Tracking
        <span className='icon' ><BsFillAwardFill /></span>
      </header>
    </div>
  );
}

export default Header;