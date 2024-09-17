import React from 'react'

function Footer() {

  return (
    <div className='flex justify-center md:text-[0.9rem] text-[0.75rem] items-center min-h-[70px]'>
        <small className='scaleanimate'>{new Date().getFullYear()} @ JoshJoy | All right reserved</small>
    </div>
  )
}

export default Footer