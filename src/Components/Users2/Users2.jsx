import { use } from "react";
import User from "../User/User";

const Users2 = ({ userPromise }) => {
  const usersData = use(userPromise);

  return (
    <div>
      <p>This is user2</p>
      {usersData.map((userData) => (
        <User key={userData.id} userData={userData}></User>
      ))}
    </div>
  );
};

export default Users2;
