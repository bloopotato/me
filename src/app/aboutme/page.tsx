import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


const page = () => {
  return (
    <div className='flex flex-col bg-background text-foreground transition-theme px-[30px] lg:px-[200px] gap-[100px]'>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page
