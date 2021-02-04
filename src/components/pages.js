import Card from "@material-ui/core/Card";
/*import CardHeader from "@material-ui/core/CardHeader";*/
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifySelf: "center",
    //maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "10px",
  },
  media: {
    height: 140,
  },
});

const Pages = () => {
  const classes = useStyles();
  useFirestoreConnect({ collection: "pages" });
  const pages = useSelector((state) => state.firestore.ordered.pages);
  if (!isLoaded(pages)) {
    return (
      <Grid
        container
        justify="center"
        alignContent="space-around"
        display="flex"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (isEmpty(pages)) {
    return <div>Pages List Is Empty</div>;
  }
  console.log(pages);
  return (
    <div className="flex-wrapper ctouch-page">
       <p class="feed-main-head">Follow Your Interests</p>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {pages &&
          Object.values(pages).map((page) => (
            <li key={page.name}>
              <Card className={classes.root}>
            
                
              <h5>{page.name}</h5>
                <img src={page.imageUrl} alt={page.name} />
                
                <a href="#e" class="follow">Follow</a>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Pages;
