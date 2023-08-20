import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = ({ contacts, onDeleteContact }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Link to="/create-contact">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
          Create Contact
        </button>
      </Link>
      {contacts.length > 0 ? (
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white border rounded p-4">
              <span className="block font-semibold">
                First Name: {contact.firstName}
              </span>
              <span className="block">
                Last Name: {contact.lastName}
              </span>
              <span className="block">
                Status: {contact.status}
              </span>
              <div className="mt-2">
                <button className="bg-green-500 text-white py-1 px-2 rounded mr-2">
                  <Link to={`/edit-contact/${index}`}>Edit</Link>
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => onDeleteContact(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 text-gray-500 text-center">
          No contact found. Please add contact from Create Contact button.
        </div>
      )}
    </div>
  );
};

export default ContactPage;
