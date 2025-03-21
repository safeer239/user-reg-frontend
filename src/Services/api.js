import axios from 'axios';

const API_URL = 'https://user-reg-system.onrender.com';

//gettgenders
export const getGenders=async()=>{
    try {
       const response=await axios.get(`${API_URL}/api/genders`) 
       return response.data
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Create User
export const createUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/createUser`, formData);
    localStorage.setItem('token',response.data.token);
  
    return response.data;
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};

// Get User
export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log('token: ', token);
    const response = await axios.get(`${API_URL}/api/auth/getUser`,{
        headers: { Authorization: `Bearer ${token}` }
    });
    console.log('response: ', response);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch user";
  }
};

// Update User
export const updateUser = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/api/auth/updateUser/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to update user";
  }
};

// Delete User
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/api/auth/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to delete user";
  }
};

