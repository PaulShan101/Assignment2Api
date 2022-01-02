import React from "react";
import People from "../peopleCard";
import Grid from "@material-ui/core/Grid";

const peopleList = ( {actors }) => {
  let peopleCard = actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <People key={m.id} actor={m}  />
    </Grid>
  ));
  return peopleCard;
};

export default peopleList;