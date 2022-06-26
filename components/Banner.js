import React, { useEffect, useState } from 'react'
import GenreIcon from './GenreIcon'
import { baseTMDBPath, tmdb } from '../pages';
import { countries } from 'country-flag-icons'
import Image from 'next/image';

function Banner({movie}) {
    console.log(movie)
    const [genres, setGenres] = useState([])

    useEffect(() =>{
        const getGenres = async() =>{
            const res = await tmdb.getGenres()
            const genres = res.genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(genre=>genre.name)
            setGenres(genres)
        }
        getGenres()
    },[movie.genre_ids])

  return (
        <div className="flex overflow-hidden bg-black/70 mt-20 rounded-3xl h-96 xl:h-[27rem]">
            <img className="" src={baseTMDBPath+movie.backdrop_path} alt={movie.title} />

            <div className="flex flex-col absolute right-[38rem] mt-5 top-1/2 -translate-y-1/2 space-y-10">

            </div>

            <div className="text-white flex flex-col justify-around relative">
                <h1 className="text-5xl font-bold">{movie.title}</h1>
                {/* <div className="absolute top-8 right-8"><Image width="20" height="20"  alt={movie.original_language} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.original_language !== "en" ? movie.original_language.toUpperCase() : "GB"}.svg`}/></div> */}
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