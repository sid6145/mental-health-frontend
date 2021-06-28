import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://w.ndtvimg.com/sites/3/2020/10/09180436/660-5.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));
function Blogs() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>BEST ONLINE COUNSELLING SERVICES</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.medelit.com/uk/wp-content/uploads/sites/3/2021/04/autism-2-1.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  ABA Therapy for Autism
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  ABA therapy was actually based on the observations made by the world-renowned researcher cum psychologist, Dr. B.F. Skinner. He believed that behavior is changeable through positive reinforcement. If we can reflect on our childhood, we understand that we learned through the consequences of our behaviors. Skinner stated that behavior that is reinforced tends to rewire us and becomes our default behavior. He also found that behaviors that are not reinforced will disappear over time.
                  <Button size="small">Read more...</Button></Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Dr.B.F. Skinner.
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://i1.wp.com/see.news/wp-content/uploads/2019/11/Marriage-Wayfinder-Blog-Featured-Image.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Tips to Convince Parents for Love Marriage
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Marriage is considered a sacrosanct union in India. In such a country where the traditions and customs vary over a wide range for every state, it often becomes tough for many out there, to convince their parents for marrying the love of their life. Some parents are strictly confined to the walls of tradition, culture, religion, society, etc. and the real tiff begins when their children want to opt for a choice marriage.
                  <Button size="small">ReadMore</Button></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://asterhospital.com/blog/wp-content/uploads/2020/07/2-9.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  How to handle Pandemic Anxiety during Pregnancy?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Pregnancy is an exciting time for every mother. It is a crucial time for both the parents and, the whole family. The physical and mental health of the mother is of high prominence during the time of pregnancy because whatever the mother feels, it is carried to the child. The mental health of the mother plays a major role in the brain development of the child. Researchers found that the kids whose mothers experienced high levels of anxiety or depression have less development in their brain’s white matter
                  <Button size="small">ReadMore</Button></Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.aappublications.org/news/aapnewsmag/2020/12/16/pediatricssuicidestudy121620/media/image1.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Why Suicidal Tendency is high in today’s Youth?
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  From the past few months, we are witnessing many instances where people are unable to take it. Be it a celebrity young chap or a common student, a wealthy brat, or a middle-class boy, in fact, a boy or a girl, the thought of suicide doesn’t check for anything. When the mind is depressed and the thinking goes extremely negative, when one cannot take it any longer and wants to escape from all this, suicide could be the next thought.
                  <Button size="small">ReadMore</Button></Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                       Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  );
}

export default Blogs;