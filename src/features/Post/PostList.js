import { useSelector } from "react-redux";
import {selectAllPost} from './postSlice'
const PostList = () => {
    const post  = useSelector(selectAllPost)
    const renderPost  = post.map((post)=>{
       return( <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0,100)}</p>
        </article>
    )})
  return (
    <div>
        <h2>Post List</h2>
        {renderPost}
    </div>

  )
}

export default PostList