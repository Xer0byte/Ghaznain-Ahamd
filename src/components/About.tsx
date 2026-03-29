import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <img src='/profile.png' alt='Profile' />
            <p>This is a brief about me...</p>
        </div>
    );
};

export default About;