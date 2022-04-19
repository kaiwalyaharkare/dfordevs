import React from "react";
import Home from "./Container/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Compoents/Login/login";
import PostPage from "./Container/PostPage/PostPage";
import Postdetails from "./Container/PostDetails/Postdetails";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/post" exact element={<PostPage/>}/>
          <Route path="/login" exact element = {<Login/>}/>
          <Route path="/post/:id" exact element = {<Postdetails/>}/>
        </Routes>
      </BrowserRouter>

    
    </>
  );
}
