import React from 'react'
import Button from './Button'
import cv from '../Assets/cv.pdf'

function Header() {
  return (
    <div className='w-full flex justify-between min-h-[90px] items-center px-2 xs:px-10 sm:px-20 lg:px-32 xl:px-56 sticky top-0 bg-[#001630] z-10'>
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