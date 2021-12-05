import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm';
import FilterField from '../Components/FilterField/FilterField';
import ContactList from '../Components/ContactList/ContactList';
import Container from '../Components/Container/Container';

// const styles = {
//   contactsPageWrapper
// }

const ContactsPage = () => {
  return (
    <Container>
      <ContactForm />
      <FilterField />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
