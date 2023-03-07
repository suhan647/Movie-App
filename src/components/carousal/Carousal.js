import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import '../../App.css'
import { NavLink } from 'react-router-dom';

function Carousal() {
  return (
    <div className='carousal-container'>
      <div className='carousal-container2'>
        <Carousel infiniteLoop autoPlay showThumbs={false} >
        <div>
            <img alt='img' src="https://fandomical.com/wp-content/uploads/2022/05/HD_Marvel_Heroes_Game_Photos.jpeg" height='100%' />
            <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
          <div>
            <img alt='img' src="https://fandomical.com/wp-content/uploads/2023/01/Wednesday_-Series-Main-Titles-by-Filmograph.png" height='400px' width='400px'
             />
              <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
          <div>
            <img alt='img' src="https://i.ytimg.com/vi/Wh1h73V8Pc4/maxresdefault.jpg" />
            <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
          <div>
            <img alt='img' src="https://fandomical.com/wp-content/uploads/2023/02/wp7494938-hawkeye-marvel-avengers-wallpapers-561x316.jpg" height='400px' width='400px' />
            <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
          <div>
            <img alt='img' src="https://assets.capitalfm.com/2017/11/breaking-bad---the-movie-1489395539-herowidev4-0.png" height='400px' width='400px'/>
            <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
          <div>
            <img alt='img' src='https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1556292830701-LR849KLULMTLSWOSGSX0/Avengers-Endgame-Film-Review.jpg' />
            <p className="legend" style={{color:'yellow' ,fontSize:'50px',alignItems:'center',display:'flex', justifyContent:'center',marginY:'0'}}><PlayCircleOutlineOutlinedIcon fontSize='500px'/><b>Play</b></p>
          </div>
        </Carousel>
      </div>

      <div className='list-images'>
      <NavLink to='/popularmovies' className='list_link'>
        <div className='sideimages'>
          <img alt='img' src="https://cdn.pixabay.com/photo/2023/02/12/12/45/iron-man-7785032__480.jpg" width='100px' height='150px' />
          <div style={{display:'flex'}}>
            <div style={{alignItems:'center',display:'flex'}}>
          <p className='playbtnm'><PlayCircleOutlineOutlinedIcon fontSize='large'/></p>
          <small style={{color:"grey"}}>4:50</small> 
          </div>    
          </div>
          <div style={{alignItems:'center', display:'flex',flexDirection:'column'}}>
            <b>IronMan</b>
            <small style={{display:'flex',color:'grey'}}>Marvels Ironman</small>
          </div>             
        </div>

        <div className='sideimages'>
          <img alt='img' src="https://cdn.pixabay.com/photo/2017/08/27/23/59/marvel-2688068__480.jpg" width='100px' height='150px' />
          <div style={{display:'flex'}}>
            <div style={{alignItems:'center',display:'flex'}}>
          <p className='playbtnm'><PlayCircleOutlineOutlinedIcon fontSize='large'/></p>
          <small style={{color:"grey"}}>2:10</small> 
          </div>    
          </div>
          <div style={{alignItems:'center', display:'flex',flexDirection:'column'}}>
            <b>DeadPool</b>
            <small style={{display:'flex',color:'grey'}}>NO Death</small>
          </div>     
        </div>

        <div className='sideimages'>
          <img alt='img' src="https://m.media-amazon.com/images/I/81WTkpSe7uS._AC_SX342_.jpg" width='100px' height='100px' />
          <div style={{display:'flex'}}>
            <div style={{alignItems:'center',display:'flex',marginTop:"70%"}}>
          <p className='playbtnm'><PlayCircleOutlineOutlinedIcon fontSize='large'/></p>
          <small style={{color:"grey"}}>4:50</small> 
          </div>    
          </div>
          <div style={{alignItems:'center', display:'flex',flexDirection:'column'}}>
            <b>El-Camino</b>
            <small style={{display:'flex',color:'grey'}}>Drug Lord</small>
          </div>     
        </div>

       </NavLink>
      </div>
    </div>
  )
}

export default Carousal;
