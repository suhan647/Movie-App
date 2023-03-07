import axios from 'axios';
import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../../App.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToWatchList } from '../redux/slices/WatchListSlice';

 function getPostUrl(posterPath) {
  return `https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`
}


function PopularMoviesScoll() {

  const [popular, setPopular] = useState([])

  const dispatch = useDispatch()

const watchListHandler = (movie) => {
  console.log('clicked',movie);
  dispatch(addToWatchList(movie))

}


  async function moviesData(){

    try {
      let movies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=538d6a3bc31761cd9909b01b8d035f21&language=en-US&page=1')
      // console.log(movies.data.results);
      setPopular(movies.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    moviesData()
   },[])

  return (
    <>
    <h2 className='heading'>Popular Movies <KeyboardDoubleArrowRightIcon fontSize='large'/></h2>
     
    {/* <NavLink to='/popularmovies' className='list_link'> */}
     <div className='flexcontainer' >
 {popular.map((movies, index) => {
  // console.log(movies);
  return(
    <>
    
    <div className='images' key={movies.id}>
    <NavLink to='/popularmovies' className='list_link'>
      <img src={getPostUrl(movies.poster_path)} alt='popular tv show' height='250px' width='200px' />
      </NavLink>
      <div style={{display:'flex', justifyContent:'center'}}>
      <NavLink to='/popularmovies' className='list_link'>
        <div>
      <span>{movies.original_title}</span><br/>
      <small className='date'>{movies.release_date}</small>
      </div>
      </NavLink>

      <div style={{alignItems:'center',marginLeft:'7px'}} ><FavoriteIcon className='iconhover' onClick = {()=>{watchListHandler(movies)}} /></div>
      </div>
    </div>
    <div></div>

    </>
  );
 })}
</div>
{/* </NavLink> */}
    </>
  )
}

export default PopularMoviesScoll;
