import classes from './Post.module.css'
import '../components/test.css'
import classes2 from './test2.module.css'

function Post(props) {
    return (
    <div className={classes.post}>
        <h1>이건 제목</h1>
        <ul>
            <li>1번</li>
            <li>2번</li>
        </ul>
        <h2 className={classes2.sample}>이건 내용</h2>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </div>
    )
}

export default Post;
