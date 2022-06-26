import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className="flex items-center justify-between px-20 pt-10 text-gray-100 relative">
        <div className="flex space-x-6">
                <Link href="/" ><Image className="cursor-pointer" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" width="400" height="50" alt="" /></Link>
                <form className="flex items-center bg-white/5  rounded-full px-5 border-[1px] border-gray-500">
                    <input type="text" className="bg-transparent focus:outline-none" placeholder='Search...' />
                    <SearchIcon className="w-5 cursor-pointer"/>
                </form>
        </div>
        <div className="flex space-x-20">
                <Link href="/home" ><p className="cursor-pointer border-b-2 pb-1 border-transparent hover:border-sky-400 transition-all duration-150 ease-in-out">Home</p></Link>
                <Link href="/poll" ><p className="cursor-pointer border-b-2 pb-1 border-transparent hover:border-sky-400 transition-all duration-150 ease-in-out">Poll</p></Link>
                <Link href="/polldetail"><p className="cursor-pointer border-b-2 pb-1 border-transparent hover:border-sky-400 transition-all duration-150 ease-in-out">Poll Details</p></Link>
        </div>
        <div className="flex space-x-5">
            <BellIcon className="w-5 cursor-pointer"/>
            <img className="w-10 rounded-full"src="https://cdn.dribbble.com/users/388052/screenshots/15969217/media/541d0e931dc044f08db966abeb598aec.jpg?compress=1&resize=400x300" alt="gaming logo" />
        </div>

    </div>
  )
}

export default Header