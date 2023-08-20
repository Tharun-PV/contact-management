import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateContactPage = ({ onContactSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleSaveContact = () => {
    const newContact = {
      firstName,
      lastName,
      status,
    };

    onContactSave(newContact);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Create Contact</h2>
      <div className="border rounded p-4 max-w-sm mx-auto">
        <form>
          <div className="mb-4 flex items-center">
            <label className="block font-semibold w-1/4">First Name</label>
            <input
              type="text"
              className="w-3/4 p-2 border rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block font-semibold w-1/4">Last Name</label>
            <input
              type="text"
              className="w-3/4 p-2 border rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block font-semibold w-1/4">Status</label>
            <select
              className="w-3/4 p-2 border rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSaveContact}>
            Save Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateContactPage;
