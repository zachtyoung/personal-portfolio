import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import send from '../assets/send.svg'

export const Contact = () => {



    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('default_service', 'template_Dm0M7G6m', e.target, 'user_oQHUVz3lGdFUG7yN7jcWa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (

        <div id="contact">
            <h2>Get in Touch</h2>
            <p>Leave your message and I'll get back to you as soon as possible.</p>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <input type="text" name="user_name" placeholder='Name'/>
              <input type="email" name="user_email" placeholder='Email'/>
              <textarea name="message" placeholder='Message'/>
              <button type="submit">Send<img className='send'src={send}></img></button>
            </form>
        </div>
      );

}