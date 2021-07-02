import axios from 'axios';

import {
  GET_CONSUMPTION_LIST,
  UPDATE_CONSUMPTION_CALORIES,
  UPDATE_CONSUMPTION_QUANTITY,
  DELETE_CONSUMPTION,
} from './types';

// Get Consumption List
export const getConsumptionList = () => async (dispatch) => {
  const res = await axios.get('consumptions/list');
  dispatch({
    type: GET_CONSUMPTION_LIST,
    payload: res.data,
  });
};

// Update Consumption Quantity
export const updateConsumptionQuantity = (id, quantity) => async (dispatch) => {
  dispatch({
    type: UPDATE_CONSUMPTION_QUANTITY,
    payload: { id, quantity },
  });
};

// Update Consumption Calories
export const updateConsumptionCalories = (id, calories) => async (dispatch) => {
  dispatch({
    type: UPDATE_CONSUMPTION_CALORIES,
    payload: { id, calories },
  });
};

// Delete Consumption
export const deleteConsumptionCalories = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CONSUMPTION,
    payload: { id },
  });
};
