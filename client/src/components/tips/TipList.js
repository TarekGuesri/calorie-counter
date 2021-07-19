import React from 'react';

import 'src/styles/TipList.scss';

const TipList = () => {
  return (
    <ul className="tip-list text-start">
      <li>
        The calorie count on this application is based on the{' '}
        <strong>Mifflin-St Jeor</strong> equation{' '}
        <span className="text-muted">
          (Which is the one that I used personally and found effective)
        </span>
        . <br />
        <br />
        <strong>Mifflin-St Jeor Equation:</strong>
        <br /> <br />
        <span className="me-4">For men:</span> BMR = 10W + 6.25H - 5A + 5
        <br />
        <br />
        <span className="me-4">For women:</span> BMR = 10W + 6.25H - 5A - 161
        <br />
        <br />
        Where: <br />
        BMR is basal metabolic rate{' '}
        <span className="text-muted">
          (The amount of calories you need per day at rest)
        </span>
        .
        <br /> W is body weight in kg.
        <br />H is body height in cm. <br /> A is age. <br />
      </li>

      <br />
      <br />

      <li>2nd item</li>
    </ul>
  );
};

export default TipList;
