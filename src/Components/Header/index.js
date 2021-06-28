import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Switch, Link, useHistory, Redirect } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    marginRight: theme.spacing(30),
  },
  navBtn: {
    marginRight: theme.spacing(8),
  },
  navLinks: {
    textDecoration: "none",
    color: "white"
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#4290F3"}}>
        <Toolbar>
      
          <Typography variant="h6" className={classes.title}>
            Mental Chroma
          </Typography>
        
       


          <Link className={classes.navLinks} to="/">
            <Button className={classes.navBtn} color="inherit">
              Home
            </Button>
          </Link>

       
            <Link className={classes.navLinks} to="/doctorslist">
              <Button className={classes.navBtn} color="inherit">
                Schedule Appoinment
              </Button>
            </Link>
       
        
    

          <Link className={classes.navLinks} to="/doctorssignin">
            <Button className={classes.navBtn} color="inherit">
              For Doctors
            </Button>
          </Link>

          <Link className={classes.navLinks} to="/community">
            <Button className={classes.navBtn} color="inherit">
              Community
            </Button>
          </Link>

          {localStorage.userToken ? (
            <Link className={classes.navLinks} to="/dashboard">
              <Button className={classes.navBtn} color="inherit">
                Dashboard{" "}
              </Button>
            </Link>
          ) : (
            <Link className={classes.navLinks} to="/userssignin">
              <Button className={classes.navBtn} color="inherit">
                Signin{" "}
              </Button>
            </Link>
          )}
     
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;
