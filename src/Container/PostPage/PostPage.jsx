import React from "react";
import PostSection from "../PostsSection/PostSection";
import Header from "../../Compoents/Navbar/Navbar";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Actions/post";
export default function PostPage() {
  const dispatch = useDispatch();
  const { isloading, posts } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <PostSection />
      </Container>
    </>
  );
}
