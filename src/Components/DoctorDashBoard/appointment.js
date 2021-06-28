import React, { useState } from 'react';
import { makeStyles, Accordion, AccordionSummary, Typography, TextField, Button } from '@material-ui/core';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: "20px",
    boxShadow: "1px 1px 3px black"
  },
  heading: {
    fontSize: "20px",
    fontWeight: theme.typography.fontWeightRegular,
  },
  appointmentDetails: {
    padding: "20px 20px"
  }
}));

export default function Appointment(props) {
  const classes = useStyles();

  const [videoLink, setVideoLink] = useState("")
  const [activityTitle, setActivityTitle] = useState("")
  const [activityDescription, setActivityDescription] = useState("")
  

  const handleCreateActivity = () => {
    axios.post("http://localhost:5000/api/activity",
     {
      title: activityTitle,
      description: activityDescription  ,   
     },
     {
      headers:{"auth-token": localStorage.userToken},
     }
  
    
  )
  .then((res) => {
    if(res.data){
      console.log(res.data)
      alert("success")
    }
  })
  .catch((err) => console.log(err))

  setActivityTitle("")
  setActivityDescription("")
  }

 

  const date = props.date
 console.log(date)

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.name}</Typography>
        </AccordionSummary>
        <div className={classes.appointmentDetails}>
            <Typography variant="h6">email:{props.email}</Typography>
            <Typography variant="h6">date:{props.date}</Typography>
            <Typography variant="h6">time:{props.time}</Typography>
            <TextField variant="outlined" style={{margin:"20px"}} value={activityTitle} onChange={(e) => setActivityTitle(e.target.value)} label="activity title"/>
            <TextField variant="outlined"  style={{margin:"20px"}} value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} label="activity Description"/>
            <Button style={{padding:"13px 20px", margin:"20px"}} variant="contained" onClick={handleCreateActivity}>Create Activity</Button>
        </div>
       
      
      </Accordion>
   
    </div>
  );
}
