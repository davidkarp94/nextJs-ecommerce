import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <p>{`${date} DK Headphones All rights reserved`}</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer