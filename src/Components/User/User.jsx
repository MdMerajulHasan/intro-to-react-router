
import { Link } from 'react-router';

const User = ({userData}) => {
    const {id, name, email, phone} = userData;
    return (
        <div className='border border-yellow-400 rounded-md p-2 text-center mb-5'> 
            <h3 className='text-2xl font-bold'>Name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;