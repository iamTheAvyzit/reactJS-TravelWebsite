import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import mountain from '../images/mountains.jpg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='mount-img' src={mountain} alt='mountain'/>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Where to Next?</h1>
      <p>Your journey starts here</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
