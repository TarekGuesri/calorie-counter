import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center my-md-0 h-100">
          <h1 className="display-4 pt-14 mx-auto">Control your weight</h1>
          <p className="my-5 mx-auto">
            With CaloriesCounter, you can keep a track of the number of calories
            you had in day to help you know what you need in order to gain or
            lose weight.
          </p>
          <a
            className="primary-button btn-lg rounded-pill mt-5 py-2 px-4"
            href="#"
            role="button"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
