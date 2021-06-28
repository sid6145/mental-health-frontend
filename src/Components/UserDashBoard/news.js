import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import {Card, CardMedia, CardContent, makeStyles, Typography, GridList} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    newsCard:{
        minHeight: "400px"
    },
    media:{
        height: 140
    },
    gridlist:{
        overflow: true,
        width: 500,
        height: 450,
    },

    headerText:{
        position: "absolute",
        top:"25%",
        left: "27%"
    }
 
}))


function News (){
    const classes = useStyles()
    const [news, setNews] = useState([])

    const url = "https://newsapi.org/v2/top-headlines?q=health&from=2021&sortBy=popularity&apiKey=80b45b3dcb7544c6a353d32dda73be57"
    useEffect(() => {
        axios.get(url)
        .then((res) => setNews(res.data.articles))
        .catch((err) => console.log(err))
    }, [])

    console.log(news)
    return (
    <>
        <Typography className={classes.headerText}>News</Typography>
        <div className="container" style={{ position:"absolute", left:"10%"}}>
                
            <GridList className={classes.gridlist} cols={1}>
            
             {
            news.map((item) => (
                <Card className={classes.newsCard}>
                <CardMedia
                         className={classes.media}
                         image={item.urlToImage}
                
                 />
                 <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                         {item.description}
                         </Typography>
                 </CardContent>
                 </Card>
          
             
             
             
             
            ))
        }
           </GridList>
        </div>
            
    </>    
    )
}

export default News