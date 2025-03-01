import React, { useEffect, useState } from 'react';
import { getUser, deleteUser, updateUser } from '../Services/api';
import Modal from '../components/updateModal';
import { useNavigate } from 'react-router-dom';

function ViewUser() {
    const [user, setUser] = useState(null);  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        _id: '',
        name: '',
        age: '',
        dateOfBirth: '',
        gender: '',
        about: '',
    });

    const navigate=useNavigate()

    // Fetch the logged-in user's data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    // Handle user deletion
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await deleteUser(id);
            setUser(null);  // Clear user after deletion
            navigate('/')
        }
    };

    // Open modal for editing user
    const handleEdit = () => {
        setCurrentUser(user);  // Use the fetched user data
        setIsModalOpen(true);
    };

    // Close modal and reset form
    const handleModalClose = () => {
        setIsModalOpen(false);
        setCurrentUser({
            _id: '',
            name: '',
            age: '',
            dateOfBirth: '',
            gender: '',
            about: '',
        });
    };

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser(prev => ({ ...prev, [name]: value }));
    };

    // Save updated user data
    const handleSave = async () => {
        await updateUser(currentUser._id, currentUser);
        setUser(currentUser);  // Update state with the modified user data
        handleModalClose();
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-950 p-4">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <h1 className="text-3xl font-extrabold text-white mt-8 mb-6">User Details</h1>

            {user ? (
    <div className="bg-white rounded-lg shadow-md p-6 w-1/2 max-w-3xl transition transform hover:scale-105">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
            <strong>Name:</strong> {user.name}
        </p>
        <p className="text-lg text-gray-700 mb-1">
            <strong>Age:</strong> {user.age}
        </p>
        <p className="text-lg text-gray-700 mb-1">
            <strong>Date of Birth:</strong> {user.dateOfBirth}
        </p>
        {/* <p className="text-lg text-gray-700 mb-1">
            <strong>Password:</strong>{user.password}
        </p> */}
        <p className="text-lg text-gray-700 mb-1">
            <strong>Gender:</strong> {user.gender}
        </p>
        <p className="text-lg text-gray-700 mb-4">
            <strong>About:</strong> {user.about}
        </p>
        <div className="flex justify-between mt-4">
            <button
                onClick={handleEdit}
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
            >
                Edit
            </button>
            <button
                onClick={() => handleDelete(user._id)}
                className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
            >
                Delete
            </button>
        </div>
    </div>
) : (
    <p className="text-white text-lg mt-8">No registered user yet.</p>
)}


            <Modal
                isOpen={isModalOpen}
                user={currentUser}
                onClose={handleModalClose}
                onChange={handleInputChange}
                onSave={handleSave}
            />
        </div>
    );
}

export default ViewUser;
