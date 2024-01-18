import classes from './Post.module.css'
// import '../components/test.css'
import classes2 from './test2.module.css'


function Post(props) {
    return (
    <div className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
        <h1 className={classes2}>fdsafdas</h1>
        <span className={classes2}>fweeqwewqeqweqw</span>
    </div>
    )
}

export default Post;
