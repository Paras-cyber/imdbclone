import React from 'react' ;
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <Link to="/" className='logo-link'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
      </Link>
      <div className='nav-links'>
        <Link to="/movies/popular" className='nav-link'>Popular</Link>
        <Link to="/movies/top_rated" className='nav-link'>Top Rated</Link>
        <Link to="/movies/upcoming" className='nav-link'>Upcoming</Link>
      </div>
      <div className='about'><p>Created with ❤️ by Paras </p> 
        <a target='_blank' rel='noreferrer' href="https://github.com/Paras-cyber/"> <img src="/github-mark-white.png" target="_blank" alt="GitHub Logo" width="32" height="32" /></a>
      </div>
    </div>
  )
}

export default Header