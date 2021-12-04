import React from 'react';
import Container from '../Components/Container/Container';
import PhoneBookHomePageImg from '../images/phonBookHomePageImg.webp';

const styles = {
  appImg: {
    width: '500px',
  },
};

const HomePage = () => {
  return (
    <Container>
      <h1>PHONEBOOK APP</h1>
      <div>
        <img
          src={PhoneBookHomePageImg}
          alt="PhoneBookImg"
          style={styles.appImg}
        />
      </div>
    </Container>
  );
};

export default HomePage;
