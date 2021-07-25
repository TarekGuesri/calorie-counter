import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero">
      <div className="jumbotron jumbotron-fluid">
        <div className="container box text-center my-md-0 h-100">
          <h1 className="display-4 pt-14 mx-auto">Control your weight</h1>
          <p className="my-5 mx-auto">
            With CalorieCounter, you can keep a track of the number of calories
            you had in day to help you know what you need in order to gain or
            lose weight.
          </p>
          <Link
            className="primary-button btn-lg rounded-pill mt-5 py-2 px-4"
            to="/today"
            role="button"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
