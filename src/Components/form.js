import React, { useState } from "react";
import { TextField, Button, Container, makeStyles } from "@material-ui/core";
import './form.css'
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
  },

  formContainer:{
    margin:"30px 0",
    marginLeft:"25%",
    width:"50%",
    textAlign: "center",
    padding: "50px 10px",
    border: "1px solid black",
    backgroundColor: "#EEEEEE",
    borderRadius: "10px",
    boxShadow: "1px 1px 3px"
  },

  calendar:{
    marginLeft: "20%",
    margin: "20px 0"
  },

  textBox: {
    margin: "10px"
  },

  timeContainer:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px 10px",
    marginBottom: "10px"
  },

  formBackground:{
    position: "absolute",
    width:"800px ",
    height:"650px",
    top: "35%",
    left: "1%",
    zIndex: "-1"
  },

  formBackground2:{
    position: "absolute",
    width:"400px ",
    height:"600px",
    top: "35%",
    right: "4%",
    zIndex: "-1"
  }
 
});

function Form() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [payment, setPayment] = useState("");
  const history = useHistory();

  const handleTime = (e) => {
    setTime(e.target.value)
  } 

  const handlePayment = (e) => {
    setPayment(e.target.value)
  }

  console.log(payment)


  const handleSubmit = () => {
    axios
      .post(
        "https://mental-health-server.herokuapp.com/api/appointment",

        {
          name: name,
          email: email,
          date: date.toDateString(),
          time: time,
          payment: payment
        },

        {
          headers: {
            "auth-token": localStorage.docToken,
          },
        }
      )

      .then((res) => {
        if (res) {
          alert("success");
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
   <Container className={classes.container}>
     <img className={classes.formBackground} src="images/doc-img-form.png" />
     <img className={classes.formBackground2} src="images/doc-img-form2.png" />
    <div className={classes.formContainer}>
    <div className={classes.textBox}>
        <TextField
          style={{width:"350px"}}
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="first name"
          variant="outlined"
        />
      </div>
      <div className={classes.textBox}>
        <TextField
          style={{width:"350px"}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          variant="outlined"
        />
      </div>

      <Calendar className={classes.calendar} onChange={onChange} value={date} />

    <Typography>Selected time slot: {time}</Typography>
      <div className="timeContainer">
      <button className="timeBtn" value="10:00" onClick={(e) => handleTime(e, "value") }>10:00</button>
      <button className="timeBtn" value="11:00" onClick={(e) => handleTime(e, "value") }>11:00</button>
      <button  className="timeBtn" value="12:00" onClick={(e) => handleTime(e, "value") }>12:00</button>
      <button  className="timeBtn" value="13:00" onClick={(e) => handleTime(e, "value") }>13:00</button>
      <button  className="timeBtn" value="14:00" onClick={(e) => handleTime(e, "value") }>14:00</button>
      <button  className="timeBtn" value="15:00" onClick={(e) => handleTime(e, "value") }>15:00</button>
      <button  className="timeBtn" value="16:00" onClick={(e) => handleTime(e, "value") }>16:00</button>
      <button  className="timeBtn" value="17:00" onClick={(e) => handleTime(e, "value") }>17:00</button>
         
      </div>

      <div className="paymentContainer">
        <Typography>₹ {payment}</Typography>
        Pay: <button className="paymentBtn" value="500" onClick={(e) => handlePayment(e, "value")}>₹ 500</button>
      </div>

      <Button color="secondary" variant="outlined" onClick={handleSubmit}>Submit</Button>
    </div>    
    </Container>
  );
}

export default Form;
