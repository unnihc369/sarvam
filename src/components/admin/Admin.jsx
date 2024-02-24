// AdminPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        const parsedUser = JSON.parse(storedUser);
        console.log(parsedUser.user.isAdmin)
        setCurrentUser(parsedUser);

        try {
            if (!storedUser || !parsedUser.user.isAdmin) {
                navigate('/login'); 
            } 
        } catch (error) {
            console.error('Error parsing stored user data:', error);
            localStorage.removeItem('currentUser');
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        // Fetch all users from the backend when the component mounts
        axios.get('http://localhost:5000/user')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleVerifyUser = async (userId) => {
        const adminId = currentUser.user._id; // Assuming currentUser has the admin's user ID
        try {
            const response = await axios.post(`http://localhost:5000/user/${userId}/verify`, { user: userId, adminId });
            console.log(response.data);
            // Update the users list after verification
            setUsers(users.map(user => user._id === userId ? { ...user, isVerified: true } : user));
        } catch (error) {
            console.error('Error verifying user:', error);
        }
    };
    
    return (
        <div>
            <h1>User List</h1>
            
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        {user.isVerified ? (
                            <p>User is verified</p>
                        ) : (
                            <button onClick={() => handleVerifyUser(user._id)}>Verify User</button>
                        )}
                    </li>
                ))}
            </ul >
            
        </div>
    );
}

export default AdminPage;
