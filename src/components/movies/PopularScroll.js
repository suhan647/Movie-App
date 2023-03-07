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


function PopularScroll() {

  const [popular, setPopular] = useState([])

  const select = useSelector((state) => state.watchList.watchListMovies)
  const dispatch = useDispatch()


  const watchListHandler = (shows) => {
    dispatch(addToWatchList(shows))

  }


  async function moviesData(){

    try {
      let movies = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=538d6a3bc31761cd9909b01b8d035f21&language=en-US&page=1')
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
    
    <h2 className='heading'>Popular Tv Show's <KeyboardDoubleArrowRightIcon fontSize='large'/></h2>
     
     <div className='flexcontainer' >
 {popular.map((shows) => {

  return(
    <>
    
    <div className='images' key={shows.id}>
    <NavLink to='/populartvshows' className='list_link'>
      <img src={getPostUrl(shows.poster_path)} alt='popular tv show' height='250px' width='200px' />
      </NavLink>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div>
        <NavLink to='/populartvshows' className='list_link'>
      <span>{shows.name}</span><br/>
      <small className='date'>{shows.first_air_date}</small>
      </NavLink>
      </div>

      <div style={{alignItems:'center',marginLeft:'7px'}} ><FavoriteIcon className='iconhover' onClick={()=>{watchListHandler(shows)}} /></div>
      </div>
    </div>

    </>
  );
 })}
</div>
    </>
  )
}

export default PopularScroll;
