import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/solid'


function GenreIcon({genre}) {
    console.log(genre)
  return (
    <div>
        <SearchIcon className="h-10 w-10 text-white"/>
    </div>
  )
}

export default GenreIcon