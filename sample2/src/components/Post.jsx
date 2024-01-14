import classes from './Post.module.css'
import '../components/test.css'
import classes2 from './test2.module.css'

function Post(props) {
    return (
    <div className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </div>
    )
}

export default Post;
