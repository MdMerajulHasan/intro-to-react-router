import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <p>Total posts: {posts.length}</p>
            {
                posts.map(postData=><Post key={postData.id} postData={postData}></Post>)
            }
        </div>
    );
};

export default Posts;