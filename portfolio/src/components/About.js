import React, {useEffect, useState} from 'react';
import profile from '../assets/profile.png'
import scroll from '../assets/Scroll.png'

export const About = () => {

    return(
        <div className="about">
            <div className='about-wrap'>
            <div className='about-l'>
            <h1>Zach Young</h1>
            <p>Hello, my name is Zach Young. <br></br>I am a <span className="blue">Full Stack Software Engineer</span>.</p>
            </div>
            <div className='about-R'>
                <img src={profile}></img>
            </div>
            </div>
            <img src={scroll} className='scroll'></img>
        </div>
    )

}