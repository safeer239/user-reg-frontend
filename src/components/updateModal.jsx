// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, user, onClose, onChange, onSave }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl text-center font-bold mb-4">Update User</h2>
        <form>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              minLength={2}
              required
            />
          </label>
          <label className="block mb-2">
            Age:
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              min={0}
              max={120}
              required
            />
          </label>
          <label className="block mb-2">
            Date of Birth:
            <input
              type="date"
              name="dateOfbirth"
              value={user.dateOfbirth}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </label>
          <label className="block mb-2">
            Gender:
            <select
              name="gender"
              value={user.gender}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="block mb-2">
            About:
            <input
              type="textarea"
              name="about"
              value={user.about}
              onChange={onChange}
              className="w-full p-2 border rounded mt-1"
              max={5000}
              required
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
