import React, {useEffect, useState} from 'react';
import profile from '../assets/profile.png'
import scroll from '../assets/Scroll.png'

export const About = () => {

    return(
        <div className="about">
            <div className='about-wrap'>
            <div className='about-R'>
                <img src={profile}></img>
                
            </div>
            <div className='about-l'>
            <p className="intro">Hello 👋🏻</p>
            <p className="intro">My name is Zach Young</p>  
            <p className="intro"><span className="blue"> I am a Full Stack Software Engineer</span>.</p>
            <p className='about-description'>I first began coding in high school where I got my feet wet with HTML and CSS. This past year I have gained experience working with teams to build full-stack projects utilizing <span className="blue">React JS</span>, <span className="blue">Node JS</span>, <span className="blue">Express</span>, and more. After learning so much, I have the opportunity to give back to the community that helped me and now I help students, as a <span className="blue">Team Lead</span>, to learn and grow as developers. </p>
            <p className='about-description about-description-subtitle'><a href="https://medium.com/@zachyoung/arduino-based-sms-alert-system-life-alert-inspired-88ad3dc5129a">Check out my latest tutorial on Arduino and Twilio!</a></p>
            </div>
            
            </div>
            <img src={scroll} className='scroll'></img>
        </div>
    )

}