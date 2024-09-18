import React from 'react'
import Button from '../../Common/Button'
import josh from '../../Assets/images/Josh.jpeg'

function Intro() {
  return (
    <div className='introSec w-full flex flex-col md:items-start text-center my-12 md:my-32 px-2 xs:px-10 sm:px-20 lg:px-32 xl:px-56 md:text-left'>
        <aside onClick={()=>window.open(josh)} className="relative p-2 mb-2 md:hidden">
          <div className="absolute w-full h-full top-0 left-0 rounded-full border-theme border-dashed border-2 animate-spin"></div>
          <section className='aboslute w-[90px] h-[90px] xs:w-[120px] xs:h-[120px] rounded-full overflow-hidden scaleanimate border-2 border-themeFade border-solid'>
              <img src={josh} alt="" className='object-cover w-full h-full'/>
          </section>
        </aside>
        <b className='sm:text-2xl text-theme'>Hi, I am</b>
        <b className='myname text-3xl xs:text-5xl lg:text-8xl font-extrabold mt-3 mb-1 sm:my-3'>Joshua Odame</b>
        <b className='subDes xs:text-xl sm:text-3xl lg:text-6xl font-semibold mb-4 sm:mb-10'>I build stuff that works at scale</b>

        <p className='text-[0.8rem] lg:text-[1rem]'>
            A software engineer based in Accra, Ghana with specialty in <br />
            design and development of scalable web applications.
        </p>
        <br />
        <p className='text-[0.8rem] lg:text-[1rem]'>
            Recently shipped an amazing application at Hodlpay, Ghana <br/>a Software Engineer, ask me about it!
        </p>
        <br />

        <Button link={'mailto:odamejoshua37@gmail.com'} text={'Get in touch'}/>
    </div>
  )
}

export default Intro