import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTrendingMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

import WriteReview from "../components/cardIcons/writeReview";


const Trending = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  // const addToFavorites = (movieId) => {
  //   const updatedMovies = movies.map((m) =>
  //     m.id === movieId ? { ...m, favorite: true } : m
  //   );
  //   setMovies(updatedMovies);
  // };

  

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Trending Movies'
      movies={movies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie}/>
           
          <WriteReview movie={movie} />
        </>
          
        );
      }}
      
    />
  );
};
export default Trending;