import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-300 h-screen w-1/6 p-4">
      <ul className="space-y-2">
        <li className="pb-2">
          <div className="border-b mb-2"></div>
          <Link to="/" className="text-black cursor-pointer text-lg">
            Contact
          </Link>
          <div className="border-b mt-2"></div>
        </li>
        <li className="pb-2 border-b">
          <Link to="/charts" className="text-black cursor-pointer text-lg">
            Charts And Maps
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
