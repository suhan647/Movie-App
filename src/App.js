import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter,Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import WatchList from './components/pages/WatchList'
import Home from './components/pages/Home'
import Register from './components/auth/Register';
import SignIn from './components/auth/SignIn'
import { isLoggedIn } from './components/redux/slices/LoginSlice';
// import Routing from './components/routing/Routing'
import { useSelector,useDispatch } from 'react-redux';
import PopularMovies from './components/movies/moviesDisplayPage/PopularMovies';
import PopulaTvShows from './components/movies/moviesDisplayPage/PopulaTvShows';
import Trending from './components/movies/moviesDisplayPage/Trending';
import Footer from './components/footer/Footer';


// function PrivateRoute({ path, children }) {
//   // const isLoggedIn = useSelector((state) => state.auth.user);
//   const isLoggedIn = useSelector((state) => state.auth && state.auth.user);

//  console.log('isLoggedIn:', isLoggedIn);
//   if (isLoggedIn) {
//     return <Route path={path} element={children} />;
//   } else {
//     return <Navigate to='/signin' />;
//   }
// }

function PrivateRoute({loggedin, children}){
  if(loggedin){
    return children
  }else{
    return <Navigate to='/SignIn' />
  }
}


// function PublicRoute({loggedin, children}){
//   if(!loggedin){
//     return children
//   }else{
//     return <Navigate to='/' />
//   }
// }


function App() {

const authenticated = useSelector((state)=> state.authentication.user)
console.log('from app', authenticated);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>


      <Routes>
       
      <Route path='/' element={<Home />} />

      {/* <Route path='/watchlist' element={<WatchList />} /> */}


      <Route path='/watchlist' element={
      <PrivateRoute loggedin={authenticated}>
        <WatchList />
        </PrivateRoute>} />
    

      <Route path='popularmovies' element={<PopularMovies />} />
      <Route path='populartvshows' element={<PopulaTvShows />} />
      <Route path='trending' element={<Trending />} />

      <Route path = '/register' element = {<Register/>} />
      <Route path = '/signin' element = {<SignIn/>} />
             
      </Routes>
      <Footer />
      </BrowserRouter>

   
    </div>
  );
}

export default App;
