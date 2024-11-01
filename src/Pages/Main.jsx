import React from 'react'
import Wrapper from './Components/Wrapper'
import Intro from './Components/Intro'
import About from './Components/About'
import WorkPlaces from './Components/WorkPlaces'
import Contact from './Components/Contact'
import Projects from './Components/Projects.jsx'

function Main() {
    const Content =()=>{
        return <div className='w-full relative'>
            <Intro/>
            <About/>
            <WorkPlaces/>
            <Projects/>
            <Contact/>
        </div>
    }
  return <Wrapper content={<Content/>}/>
}

export default Main