import React,{useState, useEffect} from 'react'
import { Container, Typography, makeStyles, Box, Paper, Button } from '@material-ui/core'
import {Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Appointment from './appointment'


const useStyles = makeStyles(() =>({
    container:{
        minHeight: "100vh",
    },
    appointments:{
        width: "100%",
        marginTop: "40px",
        padding: "30px 50px",
        height:"auto"
    },
    link:{
        textDecoration: "none"
    },
    appointmentBtn:{
        backgroundColor: "#4290F3",
        color: "white"
    }

}))

function DocotorDashBoard() {
    const classes = useStyles()
    const [appointment, setAppointment] = useState([])

   useEffect(() => {
     
    axios.get("https://mental-health-server.herokuapp.com/api/appointment",{
        headers:{
            "auth-token": localStorage.docToken
        }
    })
    
    .then((res) => setAppointment(res.data))
    .catch((err) => console.log(err))
   }, [])



    console.log(appointment)
    return (
        
        <Container className={classes.container}>
            
            <Box 
            display="flex" 
            justifyContent="space-around" 
            padding="20px 60px" 
            marginTop="5px"
            borderRadius="10px"
            boxShadow= "1px 1px 5px black"
            bgcolor="#EEEEEE">
                 <Typography variant="h6">Welcome Doctor</Typography>
                 <Link className={classes.link} to="/send-details">
                 <Button variant="contained" className={classes.appointmentBtn}>send appointment details</Button>
                 </Link>
                 
                 <Link className={classes.link} to="/docprofile">
                 <Button color="primary" variant="contained">Profile</Button>
                 </Link>
             
            </Box>
            
            
            <Box paddingTop="10px">
                
                <Paper className={classes.appointments} variant="outlined">
                <Typography variant="h6" style={{marginBottom: "20px"}}>Appoinments</Typography>
                        {
                            appointment.map((item) => (
                            
                                <Appointment name={item.name} email={item.email} date={item.date} time={item.time} payment={item.payment}/>
                             
                              
                           
                            ))
                        }
                </Paper>
            </Box>


        </Container>
    )
}

export default DocotorDashBoard
