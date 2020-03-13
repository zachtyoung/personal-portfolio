import React, {useEffect, useState} from 'react';
import {About} from './About'
import {Contact} from './Contact'
import {Skills} from './Skills'
import {Work} from './Work'

export const Landing = () => {


    
    return(
        <>
        <h1>Landing here</h1>
        <About/>
        <Contact/>
        <Skills/>
        <Work/>
        </>
    )

}