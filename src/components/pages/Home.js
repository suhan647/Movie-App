import PopularScroll from '../movies/PopularScroll';
import Carousal from '../carousal/Carousal';
import PopularMoviesScoll from '../movies/PopularMoviesScoll';
import TrendingScroll from '../movies/TrendingScroll';

function Home() {
  
  return ( 
    <>
<Carousal/>
   
    <PopularMoviesScoll/>
    <PopularScroll />
    <TrendingScroll/>

    </>
  )
}

export default Home