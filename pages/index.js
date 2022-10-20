import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo'

const API_KEY = 'f92e68f802ce75271d428d87496d7a35';

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const {results} = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div >
      <Seo title="Home" />
      {!movies && <h1>Loding...</h1>}
      {movies?.map((movie)=>
        <div>
          <h4>{movie.title}</h4>
        </div>
      )}
    </div>
  )
}
