import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templatePeoplePage'
import { getPeople } from "../api/tmdb-api";


const People = (props) => {
  const [actors, setActors] = useState([]);
  //const favorites = movies.filter(m => m.favorite)
  //localStorage.setItem('favorites', JSON.stringify(favorites))

 

  useEffect(() => {
    getPeople().then(actors => {
      setActors(actors);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='People'
     actors={actors}
             />

  );
};
export default People;