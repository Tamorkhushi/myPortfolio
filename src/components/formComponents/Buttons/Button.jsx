import { Link } from "react-router-dom"
import React from "react"
export const Button = ({ name, type, style, btStyle, onClick, context, link, download }) => {
  return (
    <>
      <div className='mt-12 flex '>
        {download ?
          <a href={download} download="Khushi_cv.pdf" > <span className='group flex cursor-pointer'>
            <div className={` group-hover:bg-white group-hover:text-black text-sm sm:text-base xl:text-xl font-bold h-[2rem] md:h-[3rem] xl:h-[4rem] px-4 md:px-8 xl:px-10 text-white capitalize border-[1px] flex items-center border-r-0 border-white ${style}`}>
              {context}
            </div>
            <button className={` h-[2rem] md:h-[3rem] xl:h-[4rem] w-[3rem] sm:w-[4rem] md:w-[5rem] transition-transform group-hover:bg-[#ff0000] text-2xl xl:text-3xl group-hover:text-white font-extrabold ${btStyle}`}>
              →
            </button>
          </span>
          </a > :

          <Link to={link} > <span className='group flex cursor-pointer'>
            <div className={` group-hover:bg-white group-hover:text-black text-sm sm:text-base xl:text-xl font-bold h-[2rem] md:h-[3rem] xl:h-[4rem] px-4 md:px-8 xl:px-10 text-white capitalize border-[1px] flex items-center border-r-0 border-white ${style}`}>
              {context}
            </div>
            <button className={` h-[2rem] md:h-[3rem] xl:h-[4rem] w-[3rem] sm:w-[4rem] md:w-[5rem] transition-transform group-hover:bg-[#ff0000] text-2xl xl:text-3xl group-hover:text-white font-extrabold ${btStyle}`}>
              →
            </button>
          </span>
          </Link >
        }
      </div>
    </>
  )
}

