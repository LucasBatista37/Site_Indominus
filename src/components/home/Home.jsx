import React from 'react';
import "./home.css";
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__data">
            <Data />
            <ScrollDown />
          </div>
          <div className="home__img"></div>
        </div>  
      </div>
    </section>
  );
};

export default Home;
