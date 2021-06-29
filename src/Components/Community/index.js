import { Form, Button, } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./post";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, makeStyles} from '@material-ui/core'
import { GridList } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: "10px 10px",
    marginTop: "10px",
    width: "80%",
    backgroundColor:"#EEEEEE"
  },

  form: {
    width: "45%",
    marginLeft:"27%",
    margin: "40px 0",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "20px 20px"
  },

  gridlist: {
    position:"relative",
    overflow: "true",
    width: "50%",
    height: 500,
    left:"25%"
  }
})


function Community() {

  const classes = useStyles()


  const [post, setPost] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post")
      .then((res) => setPost(res.data));
  }, [post]);

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log("youa re inside handlepost");
    const data = new FormData();

    data.append("title", postTitle);
    data.append("description", postDescription);
    data.append("postImage", fileName);

    const config = {headers: {'Content-type': 'multipart/form-data'}};
 
    setPostTitle("");
    setPostDescription("");
    setFileName("")


    axios
      .post("https://mental-health-server.herokuapp.com/api/post", data, config)
      .then((res) =>{
           console.log(res)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
      <Form className={classes.form} onSubmit={handlePost} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            onChange={(e) => setPostTitle(e.target.value)}
            value={postTitle}
            type="text"
            placeholder="Enter post title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPostDescription(e.target.value)}
            value={postDescription}
            placeholder="Enter post description"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>upload image</Form.Label>
          <Form.Control type="file" filename="postImage" onChange={onChangeFile}/>
          
        </Form.Group>

        <Button type="submit">Post</Button>
      </Form>
     
     
     <GridList className={classes.gridlist} cols={1}>
     {
          post.map((item) => (
            <Post title={item.title} image={item.postImage} description={item.description}/>
          ))
      }
     </GridList>
     
    </Container>
  );
}

export default Community;
