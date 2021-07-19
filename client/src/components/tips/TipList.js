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

      <li>
        A proper diet and exercise is the most common and accepted way to lose
        weight. Though, it is not recommended to lower your calorie intake by
        more than 1000 calories per day{' '}
        <span className="text-muted">(Losing 1 kg per week) </span>
        which can be unhealthy, because it can result to a muscle loss which in
        turn lowers your metabolism.
      </li>

      <br />
      <br />

      <li>
        There are many approaches to weight loss and there is no set ideal
        method that works for all people, which is why so many different diets
        and exercise regimens exist. While some methods are more effective for
        each individual person, not all weight loss methods are equivalent, and
        studies suggest that some approaches are healthier than others.
      </li>

      <br />
      <br />

      <li>
        A lot people confuse bloating with fat. Bloating occurs when your belly
        becomes enlarged with fluid or gas and not because you are having more
        calories than you need. It happens when you eat foods that are hard for
        your stomach to digest{' '}
        <span className="text-muted">
          (Such as legumes, dairy, apples, salty foods...etc){' '}
        </span>
        . In order to avoid bloating, it is better to drink more water and try a
        different diet that does not contain high-FODMAP foods.
      </li>
    </ul>
  );
};

export default TipList;
