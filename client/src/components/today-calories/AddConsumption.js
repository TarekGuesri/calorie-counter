import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactAutocomplete from 'react-autocomplete';

const AddConsumption = ({ addConsumption }) => {
  const [state, setState] = useState({
    foods: [],
    loading: true,
    food: { id: '', value: 'Loading...' },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('foods/available');
      setState({
        ...state,
        foods: res.data,
        loading: false,
        food: {
          id: '',
          value: res.data.length > 0 ? '' : 'Your foods list is empty',
        },
      });
    };
    fetchData();
  }, []);

  const handleOnSelect = (value, item) => {
    setState({ ...state, food: item });
  };

  const handleAddToList = () => {
    const { food, foods } = state;
    const selectedFood = foods.find(
      (selectedFood) => selectedFood._id === food.id
    );

    // Adding the food the consumption list
    addConsumption(selectedFood);
  };

  const { foods, loading, food } = state;

  return (
    <div className="mb-5">
      <h5 style={{ display: 'inline' }}> Add a consumption </h5>
      (if you want to add a new food click <Link to="/my-foods">here</Link> )
      <br />
      <ReactAutocomplete
        items={
          // We map the foods for ReactAutocomplete
          foods.map((food) => ({
            id: food._id,
            value: `${food.name} (${food.caloriesPerPortion} c)`,
          }))
        }
        shouldItemRender={(item, value) =>
          item.value.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={(item) => item.value}
        renderInput={(props) => (
          <input
            className="form-control mb-0 mx"
            disabled={loading || foods.length < 1}
            {...props}
          />
        )}
        renderItem={(item, highlighted) => (
          <div
            key={item.id}
            style={{
              backgroundColor: highlighted ? '#55973f' : 'transparent',
              color: highlighted ? 'white' : 'black',
              textAlign: 'left',
              padding: '8px',
            }}
          >
            {item.value}
          </div>
        )}
        value={state.food.value}
        onChange={(e) =>
          setState({ ...state, food: { value: e.target.value, id: '' } })
        }
        onSelect={handleOnSelect}
      />
      <button
        className="primary-button  btn-lg rounded-pill mt-4 ms-0 ms-sm-4"
        style={{
          padding: '.320rem 1.75rem',
        }}
        role="button"
        disabled={!food.id}
        onClick={handleAddToList}
      >
        Add
      </button>
    </div>
  );
};

AddConsumption.propTypes = {
  addConsumption: PropTypes.func.isRequired,
};

export default AddConsumption;
