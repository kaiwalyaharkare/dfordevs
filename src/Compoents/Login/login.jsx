import React from "react";
import { GoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import { authAction } from "../../Actions/Auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./login.css";
export default function Login() {
  const history = useNavigate()
  const dispatch = useDispatch();
  const googleSuccess = async (res) => {

    const result = res.profileObj;
    const token = res.tokenId;
    try {
      dispatch(authAction(result,token));
      window.location.href='/'
    } catch (e) {
      console.log(e);
    }
  };
  const googleFaliure = () => {
    console.log("Login-Failed");
  };
  return (
    <>
      <GoogleLogin
        clientId="326368307181-gfc7ouqdbbclsks30udnlbe9al7bieps.apps.googleusercontent.com"
        render={(renderprops) => (
          <>
            <Button
              color="primary"
              fullWidth
              onClick={()=>(renderprops.onClick())}
              disabled={renderprops.disabled}
              varinent="contained"
            >
              Google SignIn
            </Button>
          </>
        )}
        onSuccess={googleSuccess}
        onFaliure={googleFaliure}
        cookiePolicy="single_host_origin"
      />
    </>
  );
}
