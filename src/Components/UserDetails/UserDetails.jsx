import { useLoaderData } from "react-router";

const UserDetails = () => {
    const detailsData = useLoaderData();
    const {website, name, phone }= detailsData;
    return (
        <div>
            <h3 className="text-2xl font-bold">Name: {name}</h3>
            <p>Website Name: {website}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;