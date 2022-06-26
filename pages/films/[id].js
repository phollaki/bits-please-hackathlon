import React from 'react'
import { baseTMDBPath, tmdb } from '..'
import Header from '../../components/Header'
import movieIds from "../../movie_ids"

function film(data) {
  const {film} = data

  return (
    <div className="p-16 pb-44 h-screen w-screen overflow-x-hidden bg-gradient-to-tr from-[#263b69] to-[#5c286f] scrollbar-thumb-gray-900 scrollbar-thin">
    {film.poster_path &&
    <>
      <div className={`h-screen max-w-screen-2xl relative mx-auto rounded-3xl backdrop-blur-lg`}>
        <div className={`w-full h-full absolute bg-cover bg-center opacity-30 rounded-3xl`} style={{backgroundImage: `url("${baseTMDBPath+film.poster_path}")`}} ></div>
        <Header/>
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
    const film = await tmdb.movie(params?.id,{})

    if (!film) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        film,
      },
    }
  }

export default film