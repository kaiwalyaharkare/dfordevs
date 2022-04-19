import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../Actions/post";
import { useSelector } from "react-redux";
import Header from "../../Compoents/Navbar/Navbar";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardMedia,
  CircularProgress,
  Paper,
  IconButton
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from "dayjs";
function Postdetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const post = useSelector((state) => state.postReducer);
  useEffect(
    () => dispatch(getPostById(id)),
    []
  );
  useSelector((state) => console.log(state.postReducer));
  console.log(post);
  if (!post) return null;
  if (post.isLoading) {
    return (
      <Paper elevation={6} >
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  return (
    <>
    <IconButton style={{padding:"100",backgroundColor:"red"}} onClick={()=>(window.location.href='/post')} >
      <ArrowBackIcon/>
    </IconButton>
      <Card sx={{ minWidth: 275 }} style={{ paddingTop: "50px" }}>
        <CardContent style={{ padding: "50px" }}>
          <Avatar
            style={{ padding: "10px", margin: "10px" }}
            sx={{ width: "56", height: "56" }}
          >
            {post?.posts.Creator}
          </Avatar>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post?.Creator}
          </Typography>
          <Typography variant="h5" component="div">
            {post?.posts.Title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {dayjs(post?.posts.createdAt).format("MM-DD-YYYY")}
          </Typography>
          <CardMedia
            component="img"
            maxwidth="300"
            maxheight="300"
            image={post?.posts.selectedFile}
            alt="green iguana"
          />
          <Typography variant="body2" padding={7}>
            {post?.posts.description}
            <br />
          </Typography>
        </CardContent>
      </Card>
      ;
    </>
  );
}

export default Postdetails;
