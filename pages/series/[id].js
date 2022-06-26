import React, { useEffect, useState } from 'react'
import { baseTMDBPath, tmdb } from '..'
import Header from '../../components/Header'
import SerieBanner from '../../components/SerieBanner'
import serieIds from "../../serieIds"

function Serie(data) {
  const [similarSeries, setSimilarSeries] = useState([])
  const {serie} = data

  useEffect(() =>{
    const getGenres = async() =>{
      const series = await tmdb.discover("tv", {
        query: [
          {
            param: "sort_by",
            value: "vote_count.desc",
          },
          {
            param: "genre",
            value: serie.genres[0].name,
          },
        ],
      });
      setSimilarSeries(series.results.slice(0,3).map(s=>s))
    }
    getGenres()
},[serie])

  return (
    <div className="p-16 pb-44 h-screen w-screen overflow-x-hidden bg-gradient-to-tr from-[#263b69] to-[#5c286f] scrollbar-thumb-gray-900 scrollbar-thin">
    {serie.poster_path &&
    <>
      <div className={` max-w-screen-2xl relative mx-auto rounded-3xl backdrop-blur-lg`}>
        <div className={`w-full h-full absolute bg-cover bg-center opacity-50 rounded-3xl`} style={{backgroundImage: `url("${baseTMDBPath+serie.poster_path}")`}} ></div>
        <Header/>
        <div className="flex gap-5 text-gray-100 mt-44 mx-20 p-5">
          <div className=" z-20 flex flex-col space-y-5">
            <h1 className="text-3xl">Recommended Series</h1>
            {similarSeries.map(s=><SerieBanner key={s.id} serie={s}/>)}
          </div>

          <div className="z-20 space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl border-b-4 border-pink-500">Introduction</h1>
              <div className="flex items-center">
              <h1>Popularity: </h1>
              <button className="bg-pink-500 py-2 px-5 rounded-full">{serie.popularity.toFixed(0)}</button>
              </div>
            </div>
            <div className="bg-black/60 rounded-3xl p-10">
              <div className="flex items-center space-x-2">
                <img src={baseTMDBPath+serie.backdrop_path || serie.poster_path} className="h-20 w-20 rounded-lg" alt="" />
                <h1 className='text-5xl'>{serie.name}</h1>
              </div>
              <p className='mt-2'>{serie.overview}</p>
            </div>
            <div className="bg-black/60 rounded-3xl p-10">
              <div className="flex items-center justify-around ">
                {serie.seasons.slice(0,3).map(s=>(
                    <div key={s.id} className="flex items-center space-x-2">
                      <img src={baseTMDBPath+s.poster_path} className="h-20 w-20 rounded-lg" alt="" />
                    <h1 className='text-2xl'>{s.name}</h1>
                    </div>
                  ))
                }
              </div>

              <div className="flex mt-4 text-white justify-around items-center">
                    <p>Popularity: <span className="font-bold text-red-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{serie.popularity.toFixed(0)}</span></p>
                    <p>Avarage Vote: <span className="font-bold text-green-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{serie.vote_average}</span></p>
                    <p>Vote Count: <span className="font-bold text-orange-500 text-2xl transition-all duration-200 ease-in-out cursor-pointer">{serie.vote_count}</span></p>
              </div>

              <div className="flex items-center space-x-4 mt-10">
                {serie.genres.map(g=>(
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
  const paths = serieIds.map((id) => ({
    params: { id: id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const serie = await tmdb.tv(params?.id,{})

    if (!serie) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        serie,
      },
    }
  }

export default Serie