import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { baseTMDBPath, tmdb } from '../pages';

function Banner({movie}) {
    const [genres, setGenres] = useState([])

    useEffect(() =>{
        const getGenres = async() =>{
            const res = await tmdb.getGenres()
            setGenres(res.genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(genre=>genre.name))
        }
        getGenres()
    },[movie.genre_ids])

  return (
        <div className="cursor-pointer flex m-20 overflow-hidden bg-black/70 rounded-3xl h-96 xl:h-[27rem]">
            <Link href={`/films/${movie.id}`}><div className="w-full h-full bg-cover bg-center" style={{backgroundImage: `url("${baseTMDBPath+movie.backdrop_path}")`}}></div></Link>

            <div className="text-white flex w-4/5 flex-col justify-around relative">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                <div>
                    <button className="bg-pink-500 py-2 px-10 rounded-full">{genres[0]}</button>
                </div>
                <p className="pt-2 px-10">{movie?.overview}</p>
                <div className="flex text-white justify-around">
                    <p>Popularity: <span className="font-bold text-red-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.popularity.toFixed(0)}</span></p>
                    <p>Avarage Vote: <span className="font-bold text-green-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_average}</span></p>
                    <p>Vote Count: <span className="font-bold text-orange-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_count}</span></p>
                </div>
                <div className="flex items-center justify-around ">
                </div>
            </div>
        </div>
  )
}

export default Banner