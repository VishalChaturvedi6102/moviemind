import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  console.log('showGptSearch:', showGptSearch);

  // Fetch movies data
  const nowPlayingMovies = useNowPlayingMovies();
  const popularMovies = usePopularMovies();

  // Debugging: Log the fetched movie data
  console.log('Now Playing Movies:', nowPlayingMovies);
  console.log('Popular Movies:', popularMovies);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
