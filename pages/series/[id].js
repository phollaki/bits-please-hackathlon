import React from 'react'
import { baseTMDBPath, tmdb } from '..'
import Header from '../../components/Header'
import serieIds from "../../serieIds"

function serie(data) {
  const {serie} = data

  return (
    <div className="p-16 pb-44 h-screen w-screen overflow-x-hidden bg-gradient-to-tr from-[#263b69] to-[#5c286f] scrollbar-thumb-gray-900 scrollbar-thin">
    {serie.poster_path &&
    <>
      <div className={`h-screen max-w-screen-2xl relative mx-auto rounded-3xl backdrop-blur-lg`}>
        <div className={`w-full h-full absolute bg-cover bg-center opacity-30 rounded-3xl`} style={{backgroundImage: `url("${baseTMDBPath+serie.poster_path}")`}} ></div>
        <Header/>
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
    const serie = await tmdb.movie(params?.id,{})

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

export default serie