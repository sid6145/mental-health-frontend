import { Link ,useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Button,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    padding: "100px 100px",
    display: "flex",
    justifyContent: "center"
  },
  profileImg: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    marginBottom: "20px",
    boxShadow: "1px 1px 10px black"
  },

  profileContainer:{
    padding: "50px 0",
    border: "1px solid black",
    backgroundColor: "#EFF5FC ",
    borderRadius: "20px",
    width: "50%",
    boxShadow: "2px 2px 15px black",
    fontFamily: "poppins"
  },

  profileText: {
    margin: "20px",
    fontFamily: "poppins",
    fontSize: '23px'
  },

  upload: {
    padding: "6px 6px",
    backgroundColor: "#4290F3",
    color: "white",
    borderRadius: "10px",
    border: "none"
  }
}));

function UserProfile() {
  const classes = useStyles();

  const [profile, setProfile] = useState([]);
  const [fileName, setFileName] = useState("")

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  }

  useEffect(() => {
    axios
      .get("https://mental-health-server.herokuapp.com/api/user/profile", {
        headers: { "auth-token": localStorage.userToken },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, [profile]);

  const history = useHistory();

  const handleSignout = () => {
    window.localStorage.removeItem("userToken");
    history.push("/userssignin");
    window.location.reload();
  };

  const handleChangeImage = (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append("userImage", fileName)

    const config = {headers: {
      "Content-type": "multipart/form-data",
      "auth-token": localStorage.userToken
    }};
 
    
    axios
      .put(
        "https://mental-health-server.herokuapp.com/api/user/profile", data, config )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
    {/* <Link to="/dashboard">
      <Button>Back</Button>
    </Link> */}
    <div className={classes.profileContainer}>

        <img
          className={classes.profileImg}
          src={profile.userImage}
          alt="profile image"
        />

        <form onSubmit={handleChangeImage} encType="multipart/form-data">
          <input type="file" name="userImage" onChange={onChangeFile} />
          <button className={classes.upload} type="submit">upload</button>
        </form>
        <Typography className={classes.profileText}>{profile.name}</Typography>
        <Typography  className={classes.profileText}>{profile.email}</Typography>

        <Button color="secondary" onClick={handleSignout} variant="contained">
          Signout
        </Button>
        </div>
    </Container>
  );
}

export default UserProfile;
