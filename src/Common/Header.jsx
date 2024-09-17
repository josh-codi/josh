import React from 'react'
import Button from './Button'
import cv from '../Assets/cv.pdf'

function Header() {
  return (
    <div className='w-full flex justify-between min-h-[90px] items-center px-10'>
        <h1 className='animatefromleft'><b className='text-theme'>Josh</b> | Portfolio</h1>

        <div className="flex items-center animatefromright sm:w-[400px] justify-between">
            <a href="#about"><small className='sm:flex hidden'>About</small></a>
            <a href="#experience"><small className='sm:flex hidden'>Experience</small></a>
            <a href="#work"><small className='sm:flex hidden'>Work</small></a>
            <a href="#contact"><small className='sm:flex hidden'>Contact</small></a>
            <Button text={'Resume'} link={cv}/>
        </div>
    </div>
  )
}

export default Header