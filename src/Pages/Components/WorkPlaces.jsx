import React, { useEffect, useState } from 'react'
import { works } from './works'

function WorkPlaces() {
    const [active, setActive] = useState(works[0])
    useEffect(()=>{
        setActive(()=>works[0])
    }, [])
  return (
    <div id='experience' className='workPlaces w-full flex flex-col items-center md:items-start justify-center my-20 lg:my-32 px-5 xs:px-10 sm:px-20 lg:px-32 xl:px-56'>
        <div className='text-theme text-xl xs:text-3xl font-extrabold py-1 md:hidden'>Where I've Worked</div>
        <div className="md:hidden flex items-center justify-center mt-1 w-[200px] ">
            <div className="border-b w-full border-gray-500"></div>
            <small className="fa fa-circle text-gray-300"></small>
            <div className="border-b w-full border-gray-500"></div>
        </div>
        <div className="md:flex items-center hidden mb-5 w-full pr-16">
            <div className='text-theme text-lg xl:text-xl font-semibold py-1 mr-2 '>Where I've Worked</div>
            <div className="grow border-b border-gray-500"></div>
        </div>
        
        <section className="flex items-start md:flex-row flex-col max-w-full mt-6 md:mt-10">
            <div className="w-full md:hidden flex flex-wrap items-center justify-center mb-5">
                {
                    works.map((work)=>{
                        return <button key={work.id} onClick={()=>setActive(()=>work)} className={`w-fit group cursor-pointer m-2 h-[35px] text-[0.75rem] rounded-3xl hover:border bg-[rgba(255,255,255,0.05)] flex px-4 border-solid border-theme`} style={{borderWidth: `${active.id === work.id ? '1px' : '0'}`}}>
                            <small className={`${work.id === active.id ? 'text-theme': 'text-white'} group-hover:text-theme  pointer-events-none`}>{work.company}</small>
                        </button>
                    })
                }
            </div>
            <div className="md:flex hidden flex-col text-left items-start border-l-2 border-gray-500 border-solid min-w-[200px] md:min-w-[250px]">
                {
                    works.map((work, idx)=>{
                        return <div key={work.id} onClick={()=>setActive(()=>work)} className={`w-full h-[45px] md:h-[60px] ${work.id === active.id ? 'bg-[rgba(255,255,255,0.05)]':''} flex pl-8 border-solid border-theme cursor-pointer`} style={{borderWidth: `0 0 0 ${active.id === work.id ? '4px' : '0'}`}}>
                            <small className={`${work.id === active.id ? 'text-theme': 'text-white'}  cursor-pointer pointer-events-none`}>{work.company}</small>
                        </div>
                    })
                }
            </div>

            <div className="flex flex-col md:items-start text-center md:text-left pl-3 md:pl-10 overflow-hidden md:p-0 p-4 md:bg-transparent bg-gray-800">
                <h1 className={`sm:text-lg md:text-2xl font-semibold ${active.id%2 !== 0 ? 'animatefromleft':'animatefromright'}`}>{active.title} <b className='text-themeFade'>@ {active.company}</b></h1>
                <small className={`md:mt-3 mb-4 md:mb-8 ${active.id%2 !== 0 ? 'animatefromleft':'animatefromright'}`}>{active.duration}</small>

                {
                    active.tasks.map((task, idx)=>{
                        return <div key={idx} className={`flex text-center md:text-left mb-3 ${active.id%2 !== 0 ? 'animatefromleft':'animatefromright'}`}>
                            {/* <i className="fa fa-caret-right text-themeFade mr-3"></i> */}
                            <p className='text-gray-500 xl:text-[0.9rem] sm:text-[0.8rem] text-[0.7rem]'>{task}</p>
                        </div>
                    })
                }
            </div>
        </section>

        
    </div>
  )
}

export default WorkPlaces