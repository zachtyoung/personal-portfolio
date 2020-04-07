import React, {useEffect, useState} from 'react';
import email from '../assets/mail-i.svg'
import phone from '../assets/phone-i.svg'


export const Footer = () => {

    return(
        <div className="footer">
         <p>&copy; Zach Young 2020</p>
         <p><img src={email}></img>zach@ztyoung.com</p>
         <p><img src={phone}></img>316-469-4365</p>
        </div>
    )

}