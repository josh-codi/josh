import React from 'react'
import {projects} from './projects'

function Projects() {
  return (
    <div id='work' className='projectWorks w-full flex flex-col items-center md:items-start justify-center my-20 lg:my-32 px-2 xs:px-10 sm:px-20 lg:px-32 xl:px-56'>
        <div className='text-theme text-lg md:text-xl xs:text-3xl font-extrabold py-1 md:hidden'>Some things I've Built</div>
        <div className="md:hidden flex items-center justify-center mt-1 w-[200px] ">
            <div className="border-b w-full border-gray-500"></div>
            <small className="fa fa-circle text-gray-300"></small>
            <div className="border-b w-full border-gray-500"></div>
        </div>
        <div className="md:flex items-center hidden mb-5 w-full pr-16">
            <div className='text-theme text-lg xl:text-xl font-semibold py-1 mr-2 '>Some things I've Built</div>
            <div className="grow border-b border-gray-500"></div>
        </div>

        <div className="flex flex-col items-start w-full mt-6">
            {
                projects.map((project, idx)=>{
                    return <div key={idx} className={`projectItem group flex w-full mx-auto md:flex-row flex-col items-center justify-between ${idx%2 !== 0 && 'md:flex-row-reverse'} mb-[4rem] 2xl:mb-[10rem] `}>
                        <div className={`
                            relative
                            md:min-w-[400px] 
                            md:min-h-[300px]
                            w-[100px] 
                            h-[100px] 
                            md:rounded-md
                            rounded-full
                            overflow-hidden
                            md:border-1
                            border-2 border-theme
                            md:mb-0 mb-4
                            ${idx%2 === 0 ? 'md:mr-10 animatefromleft':'md:ml-10 animatefromright'}`}>
                            <img src={project.img} alt="" className='lg:object-contain object-cover w-full h-full rounded-lg'/>
                            <div className="absolute left-0 top-0 bg-[#00000000] w-full h-full group-hover:bg-transparent"></div>
                        </div>

                        <div className={`projectDes w-full flex flex-col ${idx%2 === 0 ? 'md:items-end  animatefromright md:text-right':'md:items-start  animatefromleft md:text-left'}`}>
                            <div className={`flex flex-col ${idx%2 === 0 ? 'md:items-end':'md:items-start'} mb-2`}>
                                <small className="text-theme">Feature Project</small>
                                <h1 className='text-xl md:text-3xl font-semibold'>{project.title}</h1>
                            </div>
                            <div className='md:bg-[#0055ff33] md:my-2 md:p-5 w-full mb-2'>
                                <p className='md:text-[0.9rem] text-[0.75rem] md:text-white text-gray-500'>{project.description}</p>
                                <a href={project.link} target='_blank' rel="noreferrer" className='md:text-[0.9rem] text-[0.75rem] text-green-500'><i className="fa fa-link"></i>{project.link}</a>
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    project.skills.map((skill,idxx)=>{
                                        return <small key={idxx} className='mr-3 text-white px-4 h-10 flex items-center justify-center rounded-full bg-gray-800 m-1'>{skill}</small>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Projects