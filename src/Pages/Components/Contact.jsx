import React from 'react'
import Button from '../../Common/Button'

function Contact() {
  return (
    <div id='contact' className='w-full flex justify-center flex-col items-center my-20 lg:my-32 px-2 xs:px-10 sm:px-20 lg:px-32 xl:px-56'>
        <h1 className='text-3xl md:text-5xl xl:text-7xl font-bold'>Get In Touch</h1><br />
        <p className='text-center md:text-[0.9rem] text-[0.75rem]'>I have a thing for enabling environments where innovation meets genius minds . <br/>Whether for a potential project or just to say hi, I usually answer within a few hours!</p>
        <br />
        <div className="flex">
          <a href='https://wa.me/233542893124'><i className="fab fa-whatsapp mx-3 md:text-2xl"></i></a>
            <a href='mailto:odamejoshua37@gmail.com'><i className="fa fa-envelope mx-3 md:text-2xl"></i></a>
            <a href='https://linkedin.com/in/odamejoshua'><i className="fab fa-linkedin mx-3 md:text-2xl"></i></a>
            <a href='https://github.com/josh-codi'><i className="fab fa-github mx-3 md:text-2xl"></i></a>
            <a href='https://codepen.io/joshjoy'><i className="fab fa-codepen mx-3 md:text-2xl"></i></a>
        </div>
        <br /><br />
        <Button text={'Say Hello'} link={'https://wa.me/233542893124'}/>
    </div>
  )
}

export default Contact