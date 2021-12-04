// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import FilterField from './FilterField/FilterField';
import Header from './Header/Header';
import Main from './Main/Main';
import Container from './Container/Container';
import { IconContext } from 'react-icons';

const App = () => {
  return (
    <Container>
      <IconContext.Provider value={{ color: 'royalblue', size: '3em' }}>
        <Header />
        <Main />
      </IconContext.Provider>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>My Contacts</h2>
      <FilterField />
      <ContactList /> */}
    </Container>
  );
};

export default App;
