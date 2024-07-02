import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";


const Browse = () => {
 

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      
          <MainContainer />
          <SecondaryContainer />
          { /* iske andar 
          Videobackground + videotitle wali js fil included hai*/


          }
        
    </div>
  );
};
export default Browse;