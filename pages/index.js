import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo'
import { useRouter } from 'next/router';


export default function Home({ results }) {
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (
  //       await fetch(`api/movies`)
  //     ).json();
  //     setMovies(results);
  //   })();
  // }, []);

  const router = useRouter();
  const onClick = (movie) => {
    router.push({
      pathname: `/movies/${movie.id}`,
      query:{
        title: movie.original_title,
      }
    },`/movies/${movie.id}` )
  }


  return (
    <div >
      <div className='container'>
        <Seo title="Home" />
        {/* {!movies && <h1>Loding...</h1>} */}
        {results?.map((movie) =>
          <div onClick={() => onClick(movie)} className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        )}
      </div>
      <style jsx>{`
         .container {
           display: grid;
           grid-template-columns: 1fr 1fr;
           padding: 20px;
           gap: 20px;
         }
         .movie {
          cursor: pointer;
         }
         .movie img {
           max-width: 100%;
           border-radius: 12px;
           transition: transform 0.2s ease-in-out;
           box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
         }
         .movie:hover img {
           transform: scale(1.05) translateY(-10px);
         }
         .movie h4 {
           font-size: 18px;
           text-align: center;
         }
       `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: { results }
  }
}
