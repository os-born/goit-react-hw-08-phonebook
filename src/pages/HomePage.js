import React from 'react';
import Container from '../Components/Container/Container';
import PhoneBookHomePageImg from '../images/phonBookHomePageImg.webp';

const styles = {
  appImg: {
    width: '500px',
  },
  homePageContainer: {
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <Container>
      <div style={styles.homePageContainer}>
        <h1>PHONEBOOK APP</h1>
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
