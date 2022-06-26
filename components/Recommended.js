import React, { useEffect, useState } from 'react'
import { tmdb } from '../pages'
import SerieBanner from './SerieBanner'

function TopSeries() {
    const [topSeries, setTopSeries] = useState([])

    useEffect(() =>{
        const fetchSeries = async() =>{
            const series = await tmdb.tv('popular',1)
            const randomNumberUnderTen = Math.floor(Math.random() * 10)
            setTopSeries([series.results[randomNumberUnderTen],series.results[randomNumberUnderTen+1],series.results[randomNumberUnderTen+2]])
        }
        fetchSeries()
    },[])

  return (
    <div className="px-20 -mt-10 text-gray-100">
        <h1 className="text-2xl font-bold">Top Series</h1>
        <p className="text-gray-200">Enjoy our best series</p>
        <div className="flex items-center justify-between">
        {topSeries.map(serie=>(
            <SerieBanner key={serie.id} serie={serie}/>
            ))}
        </div>
    </div>
  )
}

export default TopSeries