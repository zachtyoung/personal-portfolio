import React, {useEffect, useState} from 'react';
import empowered from '../assets/empowered.png'
import insuline from '../assets/insuline2.png'
import live from '../assets/live.svg'
import github from '../assets/github.svg'
import school from '../assets/school.png'
import price from '../assets/price.png'
export const Work = () => {

    return(
        <div className="work-wrap">
            <div className="work clearfix">
                <div className='workText'>
                    <h1>Empowered<br></br>Conversations</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://ecbuild.netlify.com/'><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/Build-Week-Empowered-Conversations'><img className='work-link' src={github}></img></a></li>
                </ul>
                <img className='work-img' src={empowered}></img>
            </div>
            <div className="work2 clearfix">
                <div className='workText'>
                    <h1>Insuline</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://diabetesmanager.netlify.com'><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/Build-Week-Empowered-Conversations'><img className='work-link' src={github}></img></a></li>
                </ul>
                <img className='work-img' src={insuline}></img>
            </div>
            <div className="work clearfix">
                <div className='workText'>
                    <h1>D8Picker</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://www.d8picker.com/'><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/Lambda-School-Labs/school-calendar-fe'><img className='work-link' src={github}></img></a></li>
                </ul>
                <img className='work-img' src={school}></img>
            </div>
            <div className="work2 clearfix">
                <div className='workText'>
                    <h1>Price<br></br>Tracker</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://pricetracker.netlify.com/'><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/zachtyoung/price-tracker-fe'><img className='work-link' src={github}></img></a></li>
                </ul>
                <img className='work-img' src={price}></img>
            </div>
        </div>
    )

}