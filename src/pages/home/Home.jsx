import React from 'react'
import Intro from '../../components/introPart/Intro'
import Navbarcard from '../../components/cards/navbarcard'
import Educationpart from '../../components/educationPart/Educationpart'
import { Button } from '../../components/formComponents/Buttons/Button'
import Skills_part from '../../components/skillsPart/Skills_part'
import Project_part from '../../components/projectPart/Project_part'
import useScrollToTop from '../../hooks/useScrollToTop';
function Home() {
  useScrollToTop()
  return (
    <>
      <div className=' w-screen h-auto   flex justify-center items-center py-10 md:py-2 '>
        <div className='w-[95%] sm:w-[90%] m-auto flex flex-wrap-reverse sm:flex-nowrap justify-around items-center bg-cover gap-1 sm:gap-2 md:gap-4 '>
          <div className='font-sans my-[2rem] sm:my-0'>
            <h3 className='text-blue-500 my-2 text-sm sm:text-lg lg:text-xl '>Hello Everyone.</h3>
            <h1 className='text-black font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>I'm Khushi Tamor</h1>
            <div className='text-blue-500 font-sans text-sm sm:text-xl lg:text-2xl  mt-[1rem]'>A Web developer specializing in MERN stack</div>
          
              <Button context=" download resume" style="" btStyle="bg-[#ff0000] text-black" download="./khushi_CV.pdf"/>
            
          </div>
          <div className=''>
            <div className='relative bg-[#ff0000] h-[14rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] w-[14rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] shadow-white shadow-[1px_2px_20px_1px_rgba(0,0,0,0.3)] flex justify-center items-center rounded-full '><img src="/khuhi.jpg" alt="" className='h-full w-full bg-black  rounded-full' /></div>
          </div>
        </div>  
      </div>

      
      <Intro />
      <Educationpart />
      <Skills_part/>
      <Project_part/>
    </>
  )
}

export default Home