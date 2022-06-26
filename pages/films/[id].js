import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseTMDBPath, tmdb } from '..'
import Header from '../../components/Header'
import MovieBanner from '../../components/MovieBanner'
import SerieBanner from '../../components/SerieBanner'
import movieIds from "../../movie_ids"

function Movie(data) {
  const [similarMovies, setSimilarMovies] = useState([])
  const {movie} = data

  useEffect(() =>{
      const getGenres = async() =>{
        const movies = await tmdb.discover("movie", {
          query: [
            {
              param: "sort_by",
              value: "vote_count.desc",
            },
            {
              param: "genre",
              value: movie.genres[0].name,
            },
          ],
        });
        setSimilarMovies(movies.results.slice(0,3).map(s=>s))
      }
      getGenres()
  },[movie])

  return (
    <div className="p-16 pb-44 h-screen w-screen overflow-x-hidden bg-gradient-to-tr from-[#263b69] to-[#5c286f] scrollbar-thumb-gray-900 scrollbar-thin">
    {movie.poster_path &&
    <>
      <div className={` max-w-screen-2xl relative mx-auto rounded-3xl backdrop-blur-lg`}>
        <div className={`w-full h-full absolute bg-cover bg-center opacity-50 rounded-3xl`} style={{backgroundImage: `url("${baseTMDBPath+movie.poster_path}")`}} ></div>
        <Header/>
        <div className="flex gap-5 text-gray-100 mt-44 mx-20 p-5">
          <div className=" z-20 flex flex-col space-y-5">
            <h1 className="text-3xl">Recommended Movies</h1>
            {similarMovies.map(m=><MovieBanner key={m.id} movie={m}/>)}
          </div>

          <div className="z-20 space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl border-b-4 border-pink-500">Introduction</h1>
              <div className="flex items-center">
              <h1>Popularity: </h1>
              <button className="bg-pink-500 py-2 px-5 rounded-full">{movie.popularity.toFixed(0)}</button>
              </div>
            </div>

            <div className="bg-black/70 rounded-3xl p-10">
              <div className="flex items-center space-x-2">
                <img src={baseTMDBPath+movie.backdrop_path || movie.poster_path} className="h-20 w-20 rounded-lg" alt="" />
                <h1 className='text-5xl'>{movie.title}</h1>
              </div>
              <p className='mt-2'>{movie.overview}</p>
            </div>

            <div className="bg-black/70 rounded-3xl p-10">
              <div className="flex items-center justify-around">
                {movie.production_companies.slice(0,3).map(pc=>(
                    <div key={pc.id} className="flex items-center space-x-2">
                      <Image src={baseTMDBPath+pc.logo_path} width="80" height="80" className="rounded-lg" alt="" />
                    <h1 className='text-2xl'>{pc.name}</h1>
                    </div>
                  ))
                }
              </div>

              <div className="flex mt-4 text-white justify-around items-center">
                    <p>Popularity: <span className="font-bold text-red-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.popularity.toFixed(0)}</span></p>
                    <p>Avarage Vote: <span className="font-bold text-green-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_average}</span></p>
                    <p>Vote Count: <span className="font-bold text-orange-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{movie.vote_count}</span></p>
              </div>

              <div className="flex items-center space-x-4 mt-10">
                {movie.genres.map(g=>(
                  <button key={g.id} className="bg-black py-2 px-5 rounded-full">{g.name}</button>
                ))}
              </div>
            </div>
          </div>

        </div>
    </div>
    </>
    }
  </div>
  )
}

export async function getStaticPaths() {
  const paths = movieIds.map((id) => ({
    params: { id: id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const movie = await tmdb.movie(params?.id,{})

    if (!movie) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        movie,
      },
    }
  }

export default Movie