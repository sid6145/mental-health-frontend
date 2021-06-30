import React, { useState } from "react";
import { Button, Container, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    padding:"100px 100px",
  },

  formContainer:{
    margin:"50px 0",
    padding: "40px 10px",
    border: "1px solid black",
    borderRadius: "10px",
    width:"30%",
    position:"relative",
    left: "33%",
    boxShadow: "1px 1px 5px black",
    backgroundColor:"#EEEEEE"
  },

  textBox:{
      margin: "10px",
      width: "65%"
  }
  
}));

function SendDetails() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [zoomLink, setZoomLink] = useState("");

  const handleClick = () => {
    axios
      .post(
        "https://mental-health-server.herokuapp.com/api/mail",
        {
          to: email,
          html: zoomLink,
        },
        {
          headers: { "auth-token": localStorage.docToken },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEmail("");
    setZoomLink("");
  };

  return (
    <Container className={classes.container}>
      <div className={classes.formContainer}>
        <div>
          <TextField
            className={classes.textBox}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            variant="outlined"
            placeholder="enter user email"
          />
        </div>
        <div>
          <TextField
            className={classes.textBox}
            onChange={(e) => setZoomLink(e.target.value)}
            value={zoomLink}
            variant="outlined"
            placeholder="enter zoom link"
          />
        </div>
        <Button variant="contained" style={{width:"65%"}} onClick={handleClick}>Send</Button>
      </div>
    </Container>
  );
}

export default SendDetails;
