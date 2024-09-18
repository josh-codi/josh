import React from 'react'
import josh from '../../Assets/images/Josh.jpeg'

function About() {
    const skills = ['Javascript', 'Typescript', 'React Js', 'Next Js', 'Vue Js', 'Node Js', 'Python', 'Django', ]
  return (
    <div id='about' className='aboutSec w-full flex items-start my-20 lg:my-32 px-2 xs:px-10 sm:px-20 lg:px-32 xl:px-56'>
        <section className="flex flex-col items-center md:items-start w-full md:max-w-[500px]">
            <div className='text-theme text-xl sm:text-3xl font-extrabold py-1 md:hidden'>About Me</div>
            <div className="md:hidden flex items-center justify-center mt-1 w-[200px] mb-3 ">
                <div className="border-b w-full border-gray-500"></div>
                <small className="fa fa-circle text-gray-300"></small>
                <div className="border-b w-full border-gray-500"></div>
            </div>
            <div className="md:flex items-center hidden mb-5 w-full pr-16">
                <div className='text-theme text-lg xl:text-xl font-semibold py-1 mr-2 '>About Me</div>
                <div className="grow border-b border-gray-500"></div>
            </div>

            <div className="flex flex-col md:items-start md:text-left text-center">
                <p className='text-[0.8rem] lg:text-[1rem]'>I'm an engineer who loves working on challenging problems, cracking them into simpler solutions. I build scalable frontend applications, using well optimised tools.</p>
                <br />
                <p className='text-[0.8rem] lg:text-[1rem]'>I am a big advocate of frontend engineering and, I love the reactive programming paradigms of React.js.</p>
                <br />
                <p className='text-[0.8rem] lg:text-[1rem]'>I graduated from University of Energy and Natural Resources with a bachelor's in Computer Engineering, and for the past 4+ years, I've been among several teams engineering the next big stuff.</p>
                <br />
                <p className='text-[0.8rem] lg:text-[1rem]'>A glimpse of the things I'm experienced with:</p>

                <div className="grid grid-cols-3 gap-5 mt-5">
                    {
                        skills.map((skill,idx)=><aside key={idx} className="flex">
                        <i className="fa fa-caret-right text-themeFade mr-2"></i>
                        <small>{skill}</small>
                    </aside>)
                    }
                    
                </div>
            </div>
        </section>
        
        <section className="relative w-fit h-fit mt-[30px] md:flex hidden">
            <section className='w-[200px] md:w-[250px] lg:w-[300px] h-[400px] absolute -top-[30px] -right-[30px] scaleanimate border-2 border-themeFade border-solid'>
                <img src={josh} alt="" className='object-cover w-full h-full'/>
            </section>
            <div className='w-[200px] md:w-[250px] lg:w-[300px] h-[400px] border-2 border-themeFade border-dashed'></div>
        </section>
        

    </div>
  )
}

export default About