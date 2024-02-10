import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import MovieList from '../../components/movieList/MovieList';
const Home = () => {

   const [movies, setMovies] = useState([]); 

   useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(response => response.json())
        .then(response => {
            setMovies(response.results);
            console.log(movies); 
        })
        .catch(error => {
            console.log(error);
        })
   }, [movies]) 

  return (
    <div className='home'>
        <div className='poster'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false} 
            >
                {
                    movies.map(data => (
                        <Link className='Carousel_card' to={`/movie/${data.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${data && data.backdrop_path}`} alt={data.original_title} />
                            </div>
                            <div className='posterImage_overlay'>
                                <div className='posterImage_title'>{data? data.original_title : ""}</div>
                                <div className='posterImage_runtime'>
                                    {data ? data.release_date : ""}
                                    <span className='posterImage_rating'>
                                        {data ? data.vote_average : ""}
                                        <i className='fas fa-star'/>{" "}
                                    </span>
                                </div>
                                <div className='posterImage_description'>{data ? data.overview : "" }</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MovieList />
        </div>
    </div>
  )
}

export default Home