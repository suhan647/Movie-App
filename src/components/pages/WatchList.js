import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from 'react-redux'; // import useDispatch
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../../App.css';
import { removeFromWatchList } from "../redux/slices/WatchListSlice";

const getPostUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/w440_and_h660_face${posterPath}`
}

const WatchlistItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  padding: '1rem',
  alignItems: 'center',
  '& img': {
    maxWidth: '100%',
    marginRight: '2rem',
    width: '220px',
    height: '280px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& img': {
      width: '80px',
      height: '120px',
      marginRight: '0',
      marginBottom: '1rem',
    },
  },
}));

const WatchList = () => {
  const dispatch = useDispatch(); // add dispatch variable
  
  const select = useSelector((state) => state.watchList.watchListMovies);

  const deleteWatchList = (selectedMovie) => {
    // const updatedList = select.filter((movie) => movie !== selectedMovie);
    dispatch(removeFromWatchList(selectedMovie));
  };

  return (
    <div className="watchllist" >
      <h1 style={{display:'flex', justifyContent:'center', color:'deepskyblue'}}>WatchList</h1>
      <Grid container spacing={2} sx={{ color: 'white' }}>
        {select.length > 0 ? select.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={12} md={4} lg={6}>
            <WatchlistItem>
              <img src={getPostUrl(movie.poster_path)}  />
              <div>
                <Typography  variant="h6" sx={{ fontWeight: 'bold',textDecoration:"underline", color:'yellow' }}>{movie.original_title || movie.original_name}</Typography>
                <Typography sx={{color:"GrayText"}} variant="subtitle1"><b style={{color:'greenyellow'}}>Released On:</b> {movie.release_date|| movie.first_air_date}</Typography>
                <Typography sx={{color:"GrayText"}} variant="subtitle1"><b style={{color:'greenyellow'}}>Popularity:</b> {movie.popularity}</Typography>
                <Typography sx={{color:"GrayText"}} variant="subtitle1"><b style={{color:'greenyellow'}}>Votes:</b> {movie.vote_count}</Typography>
                <Typography sx={{color:"GrayText"}} variant="subtitle1"><b style={{color:'greenyellow'}}>OverView:</b> {movie.overview}</Typography>
                <Box sx={{display:"flex", alignItems:"center"}}>
                  <DeleteIcon sx={{cursor:'pointer', color:'red'}} onClick={() => {deleteWatchList(movie)}}/>
                  <Button sx={{marginLeft:'50px', color:'yellow', backgroundColor:"grey"}}><PlayArrowIcon/>  Watch Now</Button>
                </Box>
              </div>
            </WatchlistItem>
          </Grid>
        )) : (
          <Grid item xs={12}>
            <Typography variant="h4">No Movies Added to Watchlist...</Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default WatchList;
