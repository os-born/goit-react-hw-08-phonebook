// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import FilterField from './FilterField/FilterField';
import Header from './Header/Header';
import Main from './Main/Main';
import Container from './Container/Container';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../redux/auth/operations/authOperations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <IconContext.Provider value={{ color: 'royalblue', size: '3em' }}>
        <Header />
        <Main />
      </IconContext.Provider>
    </Container>
  );
};

export default App;
