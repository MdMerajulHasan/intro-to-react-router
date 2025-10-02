import { useLoaderData } from "react-router";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, userId, title, body} = postDetails;
    return (
        <div className="border border-blue-700 rounded-2xl text-center p-4">
            <h2 className="text-2xl text-blue-900">UserId: {userId}</h2>
            <p className="text-xl text-blue-900">PostId: {id}</p>
            <p className="text-xl text-blue-900 underline">{title}</p>
            <p className="text-blue-900">{body}</p>

        </div>
    );
};

export default PostDetails;