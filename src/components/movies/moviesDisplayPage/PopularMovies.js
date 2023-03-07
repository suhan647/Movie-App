import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import '../../../App.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { addToWatchList } from '../../redux/slices/WatchListSlice';
import { useDispatch } from 'react-redux';


function getPostUrl(posterPath) {
  return `https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`
}

function PopularMovies() {

  const [movies, setMovies] = useState([])
  const [expandedCard, setExpandedCard] = useState(null);

 

  async function moviesData(){
    try {
      let movies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=538d6a3bc31761cd9909b01b8d035f21&language=en-US&page=1')
      // console.log(movies.data.results);
      setMovies(movies.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    moviesData()
  },[])

  
  const toggleExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  }

  const dispatch = useDispatch()

  const watchListHandler = (movie) => {
    console.log('clicked',movie);
    dispatch(addToWatchList(movie))
  }

  return (
    <div className='watchlist_container'>
      <h1 style={{ color: '#ccd01c', textAlign: 'center', marginBottom: '4rem',textDecoration:'underline',marginTop:'100px' }}>POPULAR MOVIES</h1>

      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid sx={{display:'flex', justifyContent:'center'}} item xs={12} sm={6} md={3} key={movie.id}>
            <Card sx={{ backgroundColor: 'black',width:'300px' }}>
              <CardMedia
                component="img"
                height="350"
                width='350'
                image={`${getPostUrl(movie.poster_path)}`}
                alt={movie.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', display:'flex', justifyContent:'center' }}>
                  {movie.title}
                </Typography>

                <p style={{color:'grey', display:'flex', justifyContent:'center'}}>Released Date : {movie.release_date}</p>

                <div style={{display:'flex',justifyContent:'space-between',color:'whitesmoke',alignItems:"center"}}>
                  <p style={{display:'flex',alignItems:"center"}}><ArrowUpwardIcon />{movie.vote_count}</p>
                <p style={{color:'white', display:'flex'}}><StarIcon sx={{color:'yellow'}}/>{movie.vote_average}</p>
                  {/* <div style={{display:'flex', flexDirection:'column',alignItems:'center',marginLeft:'7px',marginTop:'0'}} ><FavoriteIcon className='iconhover' sx={{marginBottom: '-10px'}} /><br/><small>Add to WatchList</small></div> */}
                  <Button sx={{ color:'yellow'}} onClick = {()=>{watchListHandler(movie)}}> WatchList</Button>
                </div>

               {expandedCard === index ? (
                  <Typography variant="body1" sx={{ color: 'white' }}>
                   <b style={{color:'yellow'}}>Overview:</b>  {movie.overview}
                  </Typography>
                ) : (
                  <Typography variant="body1" sx={{ color: 'white' }}>
                   <b style={{color:'yellow'}}>Overview:</b>  {`${movie.overview.substring(0, 50)}... `}
                    <Button variant="text" onClick={() => toggleExpand(index)} sx={{ color: 'yellow' }}>Read more</Button>
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PopularMovies;
