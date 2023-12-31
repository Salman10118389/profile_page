import React from 'react'
import Social from './Social';
import './home.css';
import Data from './Data';
import ScrollDown from './ScrollDown';
import About from '../about/About';

const Home = () => {
  return (
    <section className="home__section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className="home__img">

                </div>

                <Data/>
            </div>            
            <ScrollDown/>
            <About/>
        </div>
    </section>
  );
}

export default Home