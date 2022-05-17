import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { ButtonBase } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import ShareIcon from "@mui/icons-material/Share";
import { deletePost } from "../../Actions/post";
import { useNavigate, Redirect } from "react-router-dom";
import { EmailShareButton } from "react-share";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Cards(post) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const openpost = () => {
    window.location.href = `/post/${post.post._id}`;
  };
  const handleDelete = ()=>{
    console.log("DElte")
    dispatch(deletePost(post.post._id))
  }
  return (
    <Card
      item
      sx={{ maxWidth: 345, m: 6, marginTop: 7 }}
      className="indivial__card"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.post.Creator}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.post.Title}
        subheader={dayjs(post.post.createdAt).format("MM-DD-YYYY")}
      />

      <ButtonBase onClick={openpost}>
        <CardMedia
          component="img"
          width="250"
          maxwidth="250"
          maxheight="250"
          image={
            post.post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt="Dev Post"
        />
      </ButtonBase>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon></ShareIcon>
        </IconButton>
        {user?.result?.googleId === post.post.post_id ? <>
          <DeleteIcon onClick={handleDelete}/>  
        </>:<></>
        
        }
          

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Post:</Typography>
          <Typography paragraph>{post.post.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
