import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, makeStyles, Grid, GridList } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
  container:{
    width:"35%",
    textAlign: "center",
    position: "absolute",
    left:"60%",
  },
  root: {
   minWidth: 330,
   zIndex: -2
   
  },
  
  title: {
    fontSize: 25,
  },
 
  gridlist:{
    overflow: true,
    width: 480,
    height: 450,
    border:"1px solid grey",
  },

  headerText:{
    position: "absolute",
    top: "25%",
    right: "20%"

  }
}))


function Activity() {
  const classes = useStyles()

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    axios
      .get("https://mental-health-server.herokuapp.com/api/activity", {
        headers: {
          "auth-token": localStorage.userToken,
        },
      })
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
    <Typography className={classes.headerText}>Activity</Typography>
    <div className={classes.container}>
     
      <GridList className={classes.gridlist} cols={1}>
      {activity.map((item) => (
       <Card className={classes.root} variant="outlined">
       <CardContent>
         <Typography variant="h2" className={classes.title} color="textSecondary" gutterBottom>
          {item.title}
         </Typography>
         <Typography variant="body2" component="p">
          {item.description}  
         </Typography>
       </CardContent>
       </Card>
      ))}
      </GridList>
    </div>
    </>
  );
}

export default Activity;
