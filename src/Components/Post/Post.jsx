import { Link, useNavigate } from "react-router";

const Post = ({ postData }) => {
  const { id, title, userId } = postData;
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate(`/posts/${id}`);
  }
  return (
    <div className="border border-green-500 rounded-lg p-4 text-center mb-5 flex flex-col">
      <p className="text-2xl font-bold">UserId: {userId}</p>
      <p className="text-xl font-bold">PostId: {id}</p>
      <p className="text-xl font-semibold">Title: {title}</p>
      <button className="bg-green-800 rounded-full text-white font-bold p-2">
        <Link to={`/posts/${id}`}>See More</Link>
      </button>
      <button onClick={handleNavigate}>See details of id: {id}</button>
    </div>
  );
};

export default Post;
