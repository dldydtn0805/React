import Post from "./Post";
import classes from './PostsList.module.css'

function PostsLists() {
  return (
    <ul className={classes.posts}>
    <Post author="Maximilian" body="React.js is awsesome!"/>
    <Post author="Manuel" body="Checkout the full course!"/>
    </ul>
  );
}

export default PostsLists;