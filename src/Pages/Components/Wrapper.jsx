import React from 'react'
import Header from '../../Common/Header'
import Footer from '../../Common/Footer'

function Wrapper({content}) {
  return (
    <div className='w-full h-full flex flex-col m-auto max-w-[1300px] text-white'>
        <Header/>
            <div className="w-full grow overflow-y-auto flex flex-col items-center">
              {content}
            </div>
        <Footer/>
        <div className="linkIcons w-fit flex justify-between fixed bottom-0 right-0 left-0 px-8 items-end animatefrombottom group">
          <section className="flex flex-col text-[#ffffff32] ">
            <a href='https://wa.me/233542893124'><i className="fab fa-whatsapp my-3 hover:text-white cursor-pointer animate-bounce"></i></a>
            <a href='mailto:odamejoshua37@gmail.com'><i className="fa fa-envelope my-3 hover:text-white cursor-pointer animate-bounce"></i></a>
            <a href='https://linkedin.com/in/odamejoshua'><i className="fab fa-linkedin my-3 hover:text-white cursor-pointer animate-bounce"></i></a>
            <a href='https://github.com/josh-codi'><i className="fab fa-github my-3 hover:text-white cursor-pointer animate-bounce"></i></a>
            <a href='https://codepen.io/joshjoy'><i className="fab fa-codepen my-3 hover:text-white cursor-pointer animate-bounce"></i></a>
            <div className='h-[130px] w-[1px] bg-[#ffffff40] group-hover:bg-white'></div>
          </section>

        </div>
    </div>
  )
}

export default Wrapper