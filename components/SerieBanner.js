import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { baseTMDBPath } from '../pages'

function SerieBanner({serie}) {
  return (
    <Link href={`/series/${serie.id}`}>
      <div className="hover:-translate-y-3 hover:shadow-pink-500 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer w-80 bg-black/40 backdrop-blur-lg backdrop-filter bg-clip-padding flex overflow-hidden rounded-xl h-44 z-20 mt-5 ">
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url("${baseTMDBPath+serie.backdrop_path}")`}}></div>
          {/* <img src={baseTMDBPath+serie.backdrop_path} alt={serie.title}/> */}
          <div className="text-white flex flex-grow flex-col px-10 justify-around">
              <div className="flex items-center">
                  <h1 className="text-lg font-bold">{serie.name}</h1>
                  <Image width="50" height="50" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${serie.origin_country}.svg`} alt="" />
              </div>
              <button className="bg-pink-500 w-28 p-2 cursor-pointer rounded-full">View it</button>
          </div>
      </div>
    </Link>

  )
}

export default SerieBanner