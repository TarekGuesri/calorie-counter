import React from 'react';

import Feature from './Feature';
import features from './dummyFeatures';

console.log(features);

const Features = () => {
  return (
    <section id="hero">
      <div className="container text-center px-4 py-5">
        <h2 className="pb-2">Features</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {features.map((feature) => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;