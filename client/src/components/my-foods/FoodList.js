import React from 'react';

import 'src/styles/TodayCalories.scss';
import FoodItem from './FoodItem';

const foods = [{ id: 1 }, { id: 2 }, { id: 3 }];

const FoodList = () => {
  return (
    <div className="table-responsive mt-5">
      <table className="table table-image">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Food</th>
            <th scope="col">Calories (Per portion)</th>
            <th scope="col" colSpan="2">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <FoodItem key={food.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
