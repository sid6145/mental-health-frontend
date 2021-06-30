import React, { useState } from "react";
import {Form} from 'react-bootstrap'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserSignUp() {
  
  
  const classes = useStyles();
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fileName, setFileName] = useState("");

  
  const history = useHistory()

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const handleSignup = async (e) => {

    e.preventDefault()

    const data = new FormData();

    data.append("name", name)
    data.append("email", email)
    data.append("password", password)
    data.append("userImage", fileName)

    axios.post("https://mental-health-server.herokuapp.com/api/user/register", data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
    
    .then((res) => {
      if(res){
        history.push('userssignin')
      }
    })
    .catch((error) => alert(error))
    
   
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSignup} encType="multipart/form-data">
          <Grid container spacing={2}>
          
            <Grid item xs={12} >
              <TextField
                 onChange={(e) => setName(e.target.value)}
                variant="outlined"
                value={name}
                required
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullName"
                autoComplete="fullname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)} 
                variant="outlined"
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <Form.Group>
                <Form.Label>upload image</Form.Label>
                <Form.Control
                  type="file"
                  name="userImage"
                  onChange={onChangeFile}
                />
              </Form.Group>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item sm>
              <Link to="/userssignin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
