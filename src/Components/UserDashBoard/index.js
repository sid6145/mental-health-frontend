import React from "react";
import { Container, makeStyles, Box, Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import Activity from "./activity";
import UserProfile from "./profile";
import News from "./news";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    width: "100vh",
    padding: "50px 50px",
    display: "flex",
    marginTop: "40px"
  },

  link: {
    textDecoration: "none",
  },
  profileButton: {
    marginLeft: "70%",
    marginTop: "10px",
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Link className={classes.link} to="/userprofile">
        <Button
          variant="contained"
          className={classes.profileButton}
          style={{ backgroundColor: "#F97474" }}
        >
          profile
        </Button>
      </Link>
      <Container className={classes.container}>      
        <Activity />
        <News />
      </Container>
    </div>
  );
}

export default Dashboard;
