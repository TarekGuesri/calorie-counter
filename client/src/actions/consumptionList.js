import axios from 'axios';

import {
  GET_CONSUMPTION_LIST,
  UPDATE_CONSUMPTION_CALORIES,
  UPDATE_CONSUMPTION_QUANTITY,
  ADD_CONSUMPTION,
  DELETE_CONSUMPTION,
  CLEAR_CONSUMPTIONS,
  SAVE_CONSUMPTION_LIST,
  SET_CONSUMPTIONS_LOADING,
} from './types';

// Get Consumption List
export const getConsumptionList = () => async (dispatch) => {
  dispatch({
    type: SET_CONSUMPTIONS_LOADING,
  });
  const res = await axios.get('consumptions/list');
  dispatch({
    type: GET_CONSUMPTION_LIST,
    payload: res.data,
  });
};

// Update Consumption Quantity
export const updateConsumptionQuantity = (id, quantity) => (dispatch) => {
  dispatch({
    type: UPDATE_CONSUMPTION_QUANTITY,
    payload: { id, quantity },
  });
};

// Update Consumption Calories
export const updateConsumptionCalories = (id, calories) => (dispatch) => {
  dispatch({
    type: UPDATE_CONSUMPTION_CALORIES,
    payload: { id, calories },
  });
};

// Add Consumption
export const addConsumption = (food) => (dispatch) => {
  dispatch({
    type: ADD_CONSUMPTION,
    payload: food,
  });
};

// Delete Consumption
export const deleteConsumption = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONSUMPTION,
    payload: { id },
  });
};

// Save Consumption
export const saveConsumptionList = (consumptionList) => async (dispatch) => {
  // Mapping the consumptions for the backend
  const consumptions = consumptionList.map((consumption) => ({
    food: consumption._id,
    quantity: consumption.quantity,
  }));

  await axios.put('consumptions/list', { consumptions });

  dispatch({
    type: SAVE_CONSUMPTION_LIST,
  });
};

// Save Consumption
export const clearConsumptionList = () => (dispatch) => {
  dispatch({
    type: CLEAR_CONSUMPTIONS,
  });
};
