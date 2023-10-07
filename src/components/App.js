import react, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App(props) {

  const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  //   if(retriveContacts) {

  //     console.log('existe');
  //     setContacts(retriveContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path='/add' element={<AddContact {...props} addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail />} />
          {/* <Route path='/' Component={ () => <ContactList contacts={contacts} getContactId={removeContactHandler} />} /> */}
          {/* <Route path='/add' Component={ () => <AddContact addContactHandler={addContactHandler}/>} /> */}
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
