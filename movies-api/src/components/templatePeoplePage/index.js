//import React from "react";
import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peopleList";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    backgroundColor: blue
  },
});

function PeoplePageTemplate({ actors, title }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  //const [genreFilter, setGenreFilter] = useState("0");
  //const genreId = Number(genreFilter);

  let displayedPeople = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    // .filter((m) => {
    //   return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    // });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    //else setGenreFilter(value);
  };



  

  //let displayedPeople = actors
    

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={10}>
        <Grid key="find" item xs={20} sm={6} md={4} lg={3} xl={2}>
        <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            //genreFilter={genreFilter}
            />
            </Grid>
        <PeopleList actors={displayedPeople}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeoplePageTemplate;