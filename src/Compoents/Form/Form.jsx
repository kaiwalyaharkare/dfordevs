import * as React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createPost } from "../../Actions/post";
import FileBase from "react-file-base64";
import Login from "../Login/login";
import Logoutauth from "../Logout/Logout";
import { useNavigate } from "react-router-dom";
export default function Forms() {
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({
    Title: "",
    Tags: [],
    description: "",
    selectedFile: "",
  });
  const handleSubmit = () => {
    console.log("SUBMIT");
    dispatch(
      createPost({
        ...formdata,
        Creator: user?.result?.name,
        post_id: user?.result?.googleId,
      })
    );
    history("/post");
    alert("post Created");
  };
  const clear = () => {
    setformdata(
      {
        Title: "",
        Tags: [],
        description: "",
        selectedFile: "",
      },
      []
    );
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
      p={"5%"}
      m={"5%"}
      onSubmit={handleSubmit}
    >
      <TextField
        style={{
          paddingTop: "25px",
        }}
        id="outlined-multiline-flexible"
        multiline
        placeholder="Title"
        maxRows={4}
        onChange={(e) => setformdata({ ...formdata, Title: e.target.value })}
      />

      <TextField
        id="outlined-multiline-flexible"
        label="Tags"
        multiline
        maxRows={10}
        onChange={(e) => setformdata({ ...formdata, Tags: e.target.value })}
      />

      <TextField
        id="filled-multiline-static"
        label="Write Something"
        multiline
        rows={15}
        variant="filled"
        fullWidth
        onChange={(e) =>
          setformdata({ ...formdata, description: e.target.value })
        }
      />
      <FileBase
        type="file"
        mulitiple={false}
        onDone={({ base64 }) =>
          setformdata({ ...formdata, selectedFile: base64 })
        }
      ></FileBase>

      <Button
        style={{ alignItems: "center" }}
        variant="outlined"
        onClick={handleSubmit}
      >
        Publish
      </Button>
      <Button style={{ alignItems: "center" }} variant="outlined">
        Clear
      </Button>

{
  user?<Logoutauth></Logoutauth>:<Login></Login>
}
    
    
    </Box>
  );
}
