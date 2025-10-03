import { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails from "../UserDetails";

const User = ({ userData }) => {
  const { id, name, email, phone } = userData;
  const [showInfo, setShowInfo] = useState(false);
  const promiseDetails = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return (
    <div className="border border-yellow-400 rounded-md p-2 text-center mb-5">
      <h3 className="text-2xl font-bold">Name: {name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button
        onClick={() => {
          setShowInfo(!showInfo);
        }}
        className="block mx-auto"
      >
        {showInfo ? "Hide" : "Show"} Info
      </button>
        {showInfo && (
          <Suspense fallback={<div>Data is Loading.....</div>}>
            <UserDetails promiseDetails={promiseDetails}></UserDetails>
          </Suspense>
        )}
    </div>
  );
};

export default User;
