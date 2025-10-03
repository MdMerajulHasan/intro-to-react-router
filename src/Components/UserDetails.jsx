import { use } from "react";

const UserDetails = ({promiseDetails}) => {
    const {name, username} = use(promiseDetails);
    return (
        <div>
            <p>User Name: {username}</p>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails;