import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation} from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactPage from './ContactPage';
import ChartsPage from './ChartsPage';
import CreateContactPage from './CreateContactPage';
import EditContactPage from './EditContactPage';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleContactSave = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleContactEdit = (index, editedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = editedContact;
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <TopNavigation />
          <Routes>
            <Route
              path="/"
              element={<ContactPage contacts={contacts} onDeleteContact={handleDeleteContact} />}
            />
            <Route path="/charts" element={<ChartsPage />} />
            <Route
              path="/create-contact"
              element={<CreateContactPage onContactSave={handleContactSave} />}
            />
            <Route 
              path="/edit-contact/:index"
              element={<EditContactPage contacts={contacts} onContactSave={handleContactEdit} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const TopNavigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-200 p-4 flex justify-center">
      {location.pathname === '/charts' ? (
        <NavLink to="/charts" className="font-bold text-2xl">
          Charts And Maps
        </NavLink>
      ) : (
        <NavLink to="/" end className="font-bold text-2xl">
          Contact Page
        </NavLink>
      )}
    </nav>
  );
};

export default App;
