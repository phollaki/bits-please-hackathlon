import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../firebase'

const TestDb = () => {
    const [movies, setMovies] = useState([]) // [] movies

    useEffect(()=>{

        // we create the function
        async function getMovies(){
            const moviescol = collection(db, 'movies');
            const movieSnap = await getDocs(moviescol);
            const movieList = movieSnap.docs.map( doc => doc.data());
            // return movieList;
            console.log(movieList)
            setMovies(movieList)
        }

        // we call the function
        getMovies()

    }, [] )

    return (
        <div>Movies Stored on The Movie Database</div>
    );
}

export default TestDb