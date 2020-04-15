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
                    <li><a title='View Project' href='https://ecbuild.netlify.com/'><p>Demo</p><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/Build-Week-Empowered-Conversations'><p>Code</p><img className='work-link' src={github}></img></a></li>
                </ul>
                <div className='work-img'>
                    <img className='work-img-img' src={empowered}></img>
                    <div class="overlay">
                        <div class="text">Anonymously message a loved one with education materials about a difficult conversation you would like to have with them.<br></br><br></br>When that loved one finished their curriculum, a message will be sent back to the original sender telling them they are prepared for their conversation.</div>
                    </div>
                </div>
                

            </div>
            <div className="work2 clearfix">
                <div className='workText'>
                    <h1>Insuline</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://diabetesmanager.netlify.com'><img className='work-link' src={live}></img><p>Demo</p></a></li>
                    <li><a title='View Code' href='https://github.com/Build-Week-Empowered-Conversations'><img className='work-link' src={github}></img><p>Code</p></a></li>
                </ul>
                <div className='work-img'>
                <img className='work-img-img' src={insuline}></img>
                    <div class="overlay">
                        <div class="text">Capturing user information about their glucose levels allows Insuline to predict glucose levels for the next 24 hours.<br></br><br></br>Insuline allows users to track their glucose levels in easy to view charts and self report their levels when most convienent for them.</div>
                    </div>
                </div>
                
            </div>
            <div className="work clearfix">
                <div className='workText'>
                    <h1>D8Picker</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://www.d8picker.com/'><p>Demo</p><img className='work-link' src={live}></img></a></li>
                    <li><a title='View Code' href='https://github.com/Lambda-School-Labs/school-calendar-fe'><p>Code</p><img className='work-link' src={github}></img></a></li>
                </ul>
                <div className='work-img'>
                <img className='work-img-img' src={school}></img>
                    <div class="overlay">
                        <div class="text">D8Picker was an app idea brought to us from a school coach. D8Picker is a calendar that can be updated with various events and then be pushed to a larger sources, such as Google, Outlook, or Ical. <br></br><br></br>Along with these events notifying changes to a schedule, the user can update details inside the events such as time and location. The last key feature are event templates that can be placed in bulk across unrelated days.</div>
                    </div>
                </div>
            </div>
            
            <div className="work2 clearfix">
                <div className='workText'>
                    <h1>Price Tracker</h1>
                    <div className='underline'></div>
                </div>
                <ul>
                    <li><a title='View Project' href='https://pricetracker.netlify.com/'><img className='work-link' src={live}></img><p>Demo</p></a></li>
                    <li><a title='View Code' href='https://github.com/zachtyoung/price-tracker-fe'><img className='work-link' src={github}></img><p>Code</p></a></li>
                </ul>
                
                
                <div className='work-img'>
                <img className='work-img-img' src={price}></img>
                    <div class="overlay">
                        <div class="text">Price Tracker was an app inspired out of a personal desire to track the prices of products on Amazon and be sent a message when the price drops below a given amount.<br></br><br></br>Becuase prices on Amazon flucutate almost without reason, Price Tracker is an application that works in the background for users so they can stop checking for price changes everyday and be assured they are able to get the product for the amount they want to pay. </div>
                    </div>
                </div>
            </div>

        </div>
    )


}











