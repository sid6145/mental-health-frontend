import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Button,
  makeStyles,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";

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
    backgroundColor: "#EEEEEE ",
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
    border: "none",
    marginBottom: "10px"
  },

  availabilityBtn:{
    padding : "5px 5px",
    backgroundColor: "#4290F3",
    margin: "10px",
    

  }
  
}));

function DocProfile() {
  const classes = useStyles();

  const [profile, setProfile] = useState([]);
  const [fileName, setFileName] = useState("");
  const [availability, setAvailability] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctor/profile", {
        headers: { "auth-token": localStorage.docToken },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, [profile]);

  const history = useHistory();

  const handleSignout = () => {
    window.localStorage.removeItem("docToken");
    history.push("/doctorssignin");
    window.location.reload();
  };

  const handleAvailability = (e) => {
    axios.put("http://localhost:5000/api/doctor/profile/availability", 
    {
      availability: availability,
    },
    {
    headers: {"auth-token": localStorage.docToken }
    }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    setAvailability("")
  };

  const handleChangeImage = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("docImage", fileName);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        "auth-token": localStorage.docToken,
      },
    };

    axios
      .put("http://localhost:5000/api/doctor/profile", data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
    <div className={classes.profileContainer}>
        <img
          className={classes.profileImg}
          src={`uploads/${profile.docImage}`}
          alt="profile image"
        />

        <form onSubmit={handleChangeImage} encType="multipart/form-data">
          <input type="file" name="docImage" onChange={onChangeFile} />
          <button type="submit" className={classes.upload}>upload</button>
        </form>
        <TextField
          onChange={(e) => setAvailability(e.target.value)}
          value={availability}
          variant="outlined"
          placeholder="enter availability details"
        />
        <Button className={classes.availabilityBtn} onClick={handleAvailability}>change availability</Button>
        <Typography className={classes.profileText}>{profile.name}</Typography>
        <Typography className={classes.profileText}>{profile.email}</Typography>
        <Typography className={classes.profileText}>{profile.specialization}</Typography>
        <Button color="secondary" onClick={handleSignout} variant="contained">
          Signout
        </Button>
        </div>
    </Container>
  );
}

export default DocProfile;
