import { Container, Grid, Grow } from "@mui/material";
import React from "react";
import Forms from "../../Compoents/Form/Form";
import Header from "../../Compoents/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../../Actions/post";
import PostSection from "../PostsSection/PostSection";
import { useSelector } from "react-redux";
import LoginCard from "../../Compoents/LoginCard/LoginCard";

export default function Home() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid item>
          {user?.result?.name ?
           <Forms/>:
           <LoginCard/>
          }
         
        </Grid>
          <PostSection />
      </Container>
    </>
  );
}
