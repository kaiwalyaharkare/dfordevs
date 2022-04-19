import React from "react";
import { useDispatch } from "react-redux";
import {logout} from '../../Actions/Auth'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Logoutauth() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = ()=>{
    localStorage.clear()
    dispatch(logout)
    history('/post')
  }
  return (
    <>
      <Button
        color="primary"
        fullWidth
        onClick={handleLogout}
        varinent="contained"
      >
        Sign Out
      </Button>
    </>
  );
}
