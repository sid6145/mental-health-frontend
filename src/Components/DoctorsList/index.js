import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import DoctorCard from "./doctor";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    padding: "100px 100px",
    minHeight: "100vh"
  },
});

function DoctorsList() {
  const classes = useStyles();
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios
      .get("https://mental-health-server.herokuapp.com/api/doctor/register")
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {doctor.map((doc) => (
          <Grid item sm={4}>
            <DoctorCard
              name={doc.name}
              specialization={doc.specialization}
              availability={doc.availability}
              image={doc.docImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DoctorsList;
