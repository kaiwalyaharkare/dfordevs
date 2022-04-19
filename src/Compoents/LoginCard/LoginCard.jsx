import React from "react";

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
import Login from "../Login/login";
export default function LoginCard() {
  return (
    <>
      <Card className="login" sx={{ minWidth: 275, paddingTop: 10 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            Login to Create Post
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            D for Devlopers is a platform to share dev posts
          </Typography>
          <Typography variant="body2">
            Enjoy!! <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Login></Login>
        </CardActions>
      </Card>
    </>
  );
}
