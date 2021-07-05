import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactAutocomplete from 'react-autocomplete';

const AddConsumption = () => {
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
        // We map the foods for the select dropdown
        foods: res.data.map((food) => ({
          id: food._id,
          value: `${food.name} (${food.caloriesPerPortion} c)`,
        })),
        loading: false,
        food: { id: '', value: '' },
      });
    };
    fetchData();
  }, []);

  const onSelect = (value, item) => {
    setState({ ...state, food: item });
  };

  const { foods, loading, food } = state;

  return (
    <div className="mb-5">
      <h5 style={{ display: 'inline' }}> Add a consumption </h5>
      (if you want to add a new food click <a href="#">here</a> )
      <br />
      <ReactAutocomplete
        className="awdaw"
        items={foods}
        shouldItemRender={(item, value) =>
          item.value.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={(item) => item.value}
        renderInput={(props) => (
          <input
            className="form-control mb-0 mx"
            disabled={loading}
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
        onSelect={onSelect}
      />
      <a
        className="primary-button  btn-lg rounded-pill mt-4 ms-0 ms-sm-4"
        role="button"
        disabled={!food.id}
      >
        Add
      </a>
    </div>
  );
};

export default AddConsumption;
