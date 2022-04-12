import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project5 from "../images/react-redux.jpg";

const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "e-commerce Shop",
    description: `An online store using e-commerce integration and @material-ui `,
    image: project5,
    linkToProject : 'https://sergeys-e-commerce-shop.netlify.app/'
  },
  {
    name: "Extended Web-audio-player",
    description: `web audio player including playlist including many settings`,
    image: project5,
    linkToProject : ' https://my-demo-payer.netlify.app/'
  },
  {
    name: "Who wants to be millionaire -- game",
    description: `TV Show Game`,
    image: project5,
    linkToProject : 'https://who-wants-to-be-a-millionaire-test-task.netlify.app/'
  },
  {
    name: "Contacts-App-Project",
    description: `Rendering contacts with filters`,
    image: project5,
    linkToProject : 'https://contacts-app-demo.netlify.app/'
  }

];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" href={project.linkToProject}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
