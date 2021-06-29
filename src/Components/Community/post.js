import {Card, CardActionArea, CardContent, makeStyles, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({

}))

function Post(props) {
    const classes = useStyles()

    return (
        <Card style={{margin:"5px", padding: "5px 5px", height:"auto"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="180"
            image={props.image}
          />
          <CardContent style={{padding:"10px 10px"}}>
          <Typography variant="h4">{props.title}</Typography>
          <Typography variant="body1">{props.description}</Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>
    )   
}

export default Post