import React from 'react';
import 'src/styles/TodayCalories.scss';

const foods = [{ id: 1 }, { id: 2 }, { id: 3 }];

const FoodList = () => {
  return (
    <div className="table-responsive">
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
            <tr key={food.id}>
              <td>
                <img
                  src="https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"
                  className="img-fluid food-img"
                  alt="Sheep"
                />
              </td>
              <td>Yogurt (frozen, low fat) (1 cup)</td>
              <td>250</td>
              <td>
                {' '}
                <td className="ps-3 ps-md-0">
                  <a href="#" className="text-danger  me-3">
                    <i className="fas fa-trash-alt"></i>
                  </a>
                  <a href="#" className="text-danger">
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
