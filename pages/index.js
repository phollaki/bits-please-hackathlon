import { useEffect, useState } from 'react'
import Header from '../components/Header'
import MoviesTmdb from "moviestmdb"
import BannerList from '../components/BannerList'
import TopSeries from '../components/Recommended'

export const baseTMDBPath = "https://image.tmdb.org/t/p/original/"
export const tmdb = new MoviesTmdb(process.env.NEXT_PUBLIC_TMDB_CLIENT_ID)

export default function Home() {
  const [bg, setBG] = useState()
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const popular = await tmdb.movies("popular",1)
      const randomNumber = Math.floor(Math.random() * popular.results.length)
      setBG(popular.results[randomNumber].backdrop_path)
      const randomNumberUnderTen = Math.floor(Math.random() * 10)
      setMovies([popular.results[randomNumberUnderTen],popular.results[randomNumberUnderTen+1],popular.results[randomNumberUnderTen+2],popular.results[randomNumberUnderTen+3],popular.results[randomNumberUnderTen+4]])
    }
    fetchData()
  },[])

  return (
    <div className="p-16 pb-44 h-screen w-screen overflow-x-hidden bg-gradient-to-tr from-[#263b69] to-[#5c286f] ">
      {bg &&
      <>
        <div className={`h-screen max-w-screen-2xl relative mx-auto rounded-3xl backdrop-blur-lg`}>
          <div className={`w-full h-full absolute bg-cover bg-center opacity-30 rounded-3xl`} style={{backgroundImage: `url("${baseTMDBPath+bg}")`}} ></div>
          <Header/>
          <BannerList movies={movies}/>
          <TopSeries/>
      </div>
      </>
      }
    </div>
  )
}
