import React from "react";
import {Link} from 'react-router-dom'
import {
  makeStyles,
  Button,
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  Paper
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root:{
    minHeight: "350px",
    boxShadow: "1px 1px 10px grey"
  },

  btn: {
    margin: "5px",
  },

  headerText: {
    textAlign: "left",
    width: "600px",
  },

  headerImg: {
    width: "30vw",
    height: "50vh",
    marginLeft: "50px",

  },

  btn: {
    margin: "5px",
    marginTop: "120px",
  },

  welcomeMessage: {
    padding: 20,
    fontFamily: "poppins",
    fontWeight: 800,
    color: "#5AA5FB",
  },

  media:{
      height: 140,
  },

  paper:{
      width: "100%",
      height: 300,
      boxShadow: "1px 1px 5px grey"
  },

  divider:{
    backgroundColor: "#4290F3",
    margin: "20px 0"
  },

  testamonial:{
    minHeight:"300px",
    boxShadow: "1px 1px 10px grey"
  },

  link:{
    textDecoration:"none"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.welcomeMessage} variant="h4">
        Welcome to Mental Chroma
      </Typography>
      <Box
        display="flex"
        justify-content="space-around"
        text-align="left"
        px="100px"
        py="50px"
      >
        <Typography className={classes.headerText}>
        Mental Chroma works with a committed and experienced team of psychologists, medical doctors, 
        speech therapists, behavioral therapists,
        and other experts across Bangalore, Delhi, Mumbai, 
        Hyderabad and other parts of India to provide customized wellness services to Indians all over the World.

          <Link className={classes.link} to="doctorslist">
          <Button className={classes.btn} color="primary" variant="contained">
            Book an appointment
          </Button>
          </Link>
          <Link className={classes.link} to="/blogs">
          <Button  className={classes.btn} color="primary" variant="outlined">
            Check out our blogs
          </Button>
          </Link>
        </Typography>

        <img className={classes.headerImg} src="images/header-img.svg" />
      </Box>
    <Divider variant="fullWidth" className={classes.divider}/>
      <Typography variant="h4" style={{paddingTop:"50px"}}>Our experts are here to listen and help</Typography>
      <Grid container spacing={3} style={{padding:"50px 100px"}}>
        <Grid item sm>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc1-home.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
               Dr Mahesh Singh - Depression Specialist
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                "Helping the client know what they are and what they want to be helps identify goals and 
                potential solutions to problems which cause emotional distress"
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc2-home.jpg"         
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Dr Pooja Kulkarni - Consulting psychologists
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                "Depressed people do not use depression as an excuse. 
                They are ready to give anything to function “normally” on a day to day basis "
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm>
        <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc3-home.jpg"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Dr Arpit Singh - Anxiety Specialist
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Common anxiety signs and symptoms include: Feeling nervous, restless or tense. \
                Having a sense of impending danger, panic or doom. Having an increased heart rate.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>


      <Divider variant="fullWidth" className={classes.divider}/>
     <Box padding="100px 0">
         <Typography variant="h4" style={{paddingBottom:"30px"}}>Our service is reliable, convinient and affordable</Typography>
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <img src="images/reliable.svg" width="100%" height="300"/>
        </Paper>

       
     </Box>
            
     <Divider variant="fullWidth" className={classes.divider}/>
    <Typography variant="h4" >Testamonials</Typography> 
     <Grid container spacing={4} style={{padding:"100px 100px"}}>
       <Grid item sm>
         <Card  className={classes.testamonial}>
       <CardMedia
                className={classes.media}
                image="images/testamonial1.jpg"
                title="Contemplative Reptile"
                />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                Santosh Rao
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Really a great place to get therapy from
                </Typography>
        </CardContent>
        </Card>
       </Grid>
    
       <Grid item sm>
       <Card  className={classes.testamonial}>
       <CardMedia
                className={classes.media}
                image="images/testamonial2.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                  Anita Chauhan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                It was great talking with therapists, they are very professional
                </Typography>
        </CardContent>
        </Card>
       </Grid>
       <Grid item sm>
        <Card  className={classes.testamonial}>
        <CardMedia
                className={classes.media}
                image="images/testamonial3.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                 Vipul Singh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 I had a really great experienced
                </Typography>
        </CardContent>
        </Card>
       </Grid>
     
       
    
      
       <Grid item sm>
        <Card className={classes.testamonial}>
       <CardMedia
                className={classes.media}
                image="images/testamonial4.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                Arnav Juvekar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Service is very reliable
                </Typography>
        </CardContent>
        </Card>
       </Grid>
     </Grid>
         

         
    </Container>
  );
}

export default Home;
