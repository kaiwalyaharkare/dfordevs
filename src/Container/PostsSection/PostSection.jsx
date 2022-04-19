import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../../Compoents/card/Card";
import "./PostSection.css";
import {Paper,CircularProgress} from '@mui/material'
function PostSection() {
  const posts = useSelector((state) => state.postReducer);
  const user = localStorage.getItem("profile");
  console.log(posts.isLoading);

  if (posts.isLoading) {
    return (
      <Paper elevation={6} style={{padding:'100px'}} >
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  return (
    <>
      <Grid container className="card__holder">
        {posts?.posts?.map((post) => (
          <Cards key={post._id} post={post}></Cards>
        ))}
      </Grid>
    </>
  );
}

export default PostSection;
