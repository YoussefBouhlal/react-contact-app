import react from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
        id: "1",
        name: "John",
        email: "john@mail.com"
    },
    {
        id: "2",
        name: "Jane",
        email: "jane@mail.com"
    }
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
