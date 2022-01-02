import React from "react"; 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";

import Typography from "@material-ui/core/Typography";


import StarRateIcon from "@material-ui/icons/StarRate";

import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'





//new main

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "red",
  },
});

export default function PeopleCard({ actor }) {
  const classes = useStyles();
  

  

  

  return (
    <Card className={classes.card}>
      
      <CardHeader
      className={classes.header}
     
      title={
        <Typography variant="h5" component="p">
          {actor.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={15}>
            <Typography variant="h6" component="p">
            <StarRateIcon fontSize="small" />
              {" What Field    - "} {actor.known_for_department}
            </Typography>
          </Grid>
          
          
          <Grid item xs={15}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" ID  - "} {actor.id}{" "}
            </Typography>
          </Grid>

          <Grid item xs={15}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {" Popularity  "} {actor.popularity}{" "}
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
      
    </Card>
    
  );
}