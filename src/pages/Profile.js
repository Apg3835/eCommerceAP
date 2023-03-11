import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const navigate = useNavigate();
  const userProfileData = useSelector((state) => state.auth.userProfileData);
  // const localid = userProfileData.localId;
  // console.log(localid);

  const updateprofileClickHandler = () => {
    navigate("/updateProfile");
  };
  return (
    <Card sx={{ margin: "auto", maxWidth: 500, mt: "5%" }}>
      {userProfileData && (
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={userProfileData.photoUrl}
        />
      )}

      <CardContent>
        {userProfileData && (
          <Typography gutterBottom component="div" variant="h5">
            {userProfileData.displayName}
          </Typography>
        )}

        {userProfileData && (
          <Typography variant="h6" color="green" component="div">
            {userProfileData.email}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          onClick={updateprofileClickHandler}
          size="small"
          sx={{ margin: "auto", color: "green" }}
        >
          Update profile here!
        </Button>
      </CardActions>
    </Card>
  );
}
