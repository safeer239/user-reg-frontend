import React, { useState, useEffect } from "react";
import { createUser, updateUser, getUser, getGenders } from "../Services/api.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [genders,setGenders]=useState([])
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dateOfBirth: "",
    password: "",
    gender: "",
    about: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();  

  useEffect(() => {
    if (id) {  // If id is present, fetch user data for editing
      getUser(id)
        .then((data) => setFormData(data))
        .catch(console.error);
    }
  }, [id]);

  useEffect(() => {
    getGenders()
    .then((data) => setGenders(data))
    .catch((error) => console.error(error));
    console.log('genders: ', genders);
      
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {  
        await updateUser(id, formData);
      } else {
        await createUser(formData);
        console.log("formData: ", formData);
      }
      navigate("/viewUser");
    } catch (err) {
      setError(err.message || "Error occurred");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-neutral-950 px-4 py-8">
      <h1 className="text-white font-extrabold text-3xl mb-6">
        {id ? "Edit User" : "Registration Form"}
      </h1>
      <div className="bg-white rounded-xl w-full max-w-3xl px-8 py-6 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="name" className="block mb-2">
              Full Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded p-2 mt-1"
                required
              />
            </label>

            <label htmlFor="age" className="block mb-2">
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full border rounded p-2 mt-1"
                required
              />
            </label>

            <label htmlFor="dateOfBirth" className="block mb-2">
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </label>

            <label htmlFor="password" className="block mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full border rounded p-2 mt-1"
                required
              />
            </label>
          </div>

          <label htmlFor="gender" className="block mb-2">
            Select your gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded p-2 mt-1"
              required
            >
              <option value="">Select Gender</option>
              {genders.map((gender)=>(

              <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </label>

          <label htmlFor="about" className="block mb-2">
            About:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Brief description of yourself..."
              className="w-full border rounded p-2 mt-1"
              maxLength="5000"
            />
          </label>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded transition"
          >
            {id ? "Update User" : "Create User"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
