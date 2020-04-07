import React, {useEffect, useState} from 'react';
import {About} from './About'
import {Contact} from './Contact'
import {Skills} from './Skills'
import {Work} from './Work'
import {Footer} from './Footer'

export const Landing = () => {


    
    return(
        <>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
        </>
    )

}