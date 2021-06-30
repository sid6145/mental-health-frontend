import React from "react";
import {Card, CardActionArea,CardContent ,CardActions, CardMedia, Button,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'


function DoctorCard(props) {
 
  return (
    <Card style={{padding:"20px 20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="160"
          image={props.image}
        />
        <CardContent>
        <Typography>name: {props.name}</Typography>
        <Typography>specialization: {props.specialization}</Typography>
        <Typography>availability: {props.availability}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/form"> Book appointment</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default DoctorCard;
