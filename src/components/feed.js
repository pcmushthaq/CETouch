import React from "react";
import { useSelector } from "react-redux";
import "firebase/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

const Feed = () => {
  const authData = useSelector((state) => state.firebase.auth);
  console.log(authData);
  useFirestoreConnect({ collection: "posts" });

  const posts = useSelector((state) => state.firestore.ordered.posts);
  if (!isLoaded(posts)) {
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

  if (isEmpty(posts)) {
    return <div>Todos List Is Empty</div>;
  }
  console.log(posts);

  return (
    <div className="flex-wrapper ctouch-feed">
      <p class="feed-main-head">Events and Updates</p>
      <ul className="feed-ul" style={{ listStyleType: "none" }}>
        {posts &&
          Object.values(posts).map((post) => (
            <li className="feed-list">
              <h6 className="feed-head widget-title">
                {post.title}
              </h6>
              <br></br>
              <img
                  alt={post.subtitle}
                  src={post.imageUrl}
                  className="rounded"
                />
              <p className="content">
                ProperT Real Estate we know that service is not only about
                logistics and portfolios. It is a unique business that requires
                in-depth and deep-rooted knowledge of{" "}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Feed;
