import React, {useEffect, useState} from 'react';
import email from '../assets/mail-i.svg'
import phone from '../assets/phone-i.svg'


export const Footer = () => {

    return(
        <div className="footer">
         <p>&copy; Zach Young 2020</p>
         <p><a href='mailto:zach@ztyoung.com' title='zach@ztyoung.com'><img src={email}></img>zach@ztyoung.com</a></p>
         <p><a href='tel:+13164694365' title='316-469-4365'><img src={phone}></img>316-469-4365</a></p>
        </div>
    )

}
