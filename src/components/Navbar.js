import React, {useEffect, useState} from 'react';
import chat from '../assets/chat-icon.svg'
import github from '../assets/github.svg'
import linkedIn from '../assets/linkedIn.svg'
import phone from '../assets/phone-i.svg'
import mail from '../assets/mail-i.svg'
export const Navbar = () => {

    return(
        <div className='nav'>
        <div className='nav-contact'>
        <a href='#contact'><img src={chat}/>Contact Me</a>
        </div>
        <div className='nav-icons'>
        <a href='https://github.com/zachtyoung' title='zachtyoung'><img src={github}/></a>
        <a href='https://www.linkedin.com/in/zach-t-young/' title='zach-t-young'><img src={linkedIn}/></a>
        {/* <a href='tel:+13164694365' title='316-469-4365'><img src={phone}/></a> */}
        {/* <a href='mailto:zach@ztyoung.com' title='zach@ztyoung.com'><img src={mail}/></a> */}

        </div>


        </div>
    )

}