import React, {useEffect, useState} from 'react';
import skill1 from '../assets/Group 10.svg'
import skill2 from '../assets/Group 11.svg'
import skill3 from '../assets/Group 12.svg'
import skill4 from '../assets/Group 13.svg'
import skill5 from '../assets/Group 14.svg'
import skill6 from '../assets/Group 15.svg'
import skill7 from '../assets/Group 16.svg'
import skill8 from '../assets/Group 17.svg'
import skill9 from '../assets/Group 18.svg'
import skill10 from '../assets/Group 19.svg'
import skill11 from '../assets/Group 20.svg'
import skill12 from '../assets/Group 21.svg'

export const Skills = () => {

    return(
        <div className='skills'>
        <h2>Skills</h2>
        <p>Several years of development experience with these languages, frameworks, and tools.</p>
        <div className='skill-wrap'>
            <div class="box">
                <img src={skill1}></img>
                <h3>Javascript</h3>
            </div>
            <div class="box">
                <img src={skill2}></img>
                <h3>Node</h3>
            </div>
            <div class="box">
                <img src={skill3}></img>
                <h3>React</h3>
            </div>
            <div class="box">
                <img src={skill4}></img>
                <h3>Redux</h3>
            </div>
            <div class="box">
                <img src={skill5}></img>
                <h3>Python</h3>
            </div>
            <div class="box">
                <img src={skill6}></img>
                <h3>Express</h3>
            </div>
            <div class="box">
                <img src={skill7}></img>
                <h3>CSS</h3>
            </div>
            <div class="box">
                <img src={skill8}></img>
                <h3>HTML</h3>
            </div>
            <div class="box">
                <img src={skill9}></img>
                <h3>SQL</h3>
            </div>
            <div class="box">
                <img src={skill10}></img>
                <h3>Postgres</h3>
            </div>
            <div class="box">
                <img src={skill11}></img>
                <h3>Bash</h3>
            </div>
            <div class="box">
                <img src={skill12}></img>
                <h3>VS Code</h3>
            </div>
        </div>
        </div>
    )


}