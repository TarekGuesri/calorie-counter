import { v4 as uuidv4 } from 'uuid';
import {
  GET_CONSUMPTION_LIST,
  UPDATE_CONSUMPTION_QUANTITY,
  UPDATE_CONSUMPTION_CALORIES,
  ADD_CONSUMPTION,
  DELETE_CONSUMPTION,
  CLEAR_CONSUMPTIONS,
  SAVE_CONSUMPTION_LIST,
  SET_CONSUMPTIONS_LOADING,
  SET_SAVING_LOADING,
} from '../actions/types';

const initialState = {
  consumptionList: [],
  totalCalories: 0,
  loading: true,
  saved: true,
  saving: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONSUMPTION_LIST: {
      return {
        ...state,
        consumptionList: payload,
        loading: false,
        totalCalories: getTotalCalories(payload),
      };
    }
    case ADD_CONSUMPTION:
      return {
        ...state,
        consumptionList: [
          {
            ...payload,
            id: uuidv4(),
            quantity: 1,
            calories: payload.caloriesPerPortion,
          },
          ...state.consumptionList,
        ],
        totalCalories: state.totalCalories + payload.caloriesPerPortion,
        saved: false,
      };
    case UPDATE_CONSUMPTION_QUANTITY: {
      let consumptionList = state.consumptionList;
      const index = consumptionList.findIndex(
        (consumption) => consumption.id == payload.id
      );

      consumptionList[index].quantity = payload.quantity;

      consumptionList[index].calories = Math.round(
        payload.quantity * consumptionList[index].caloriesPerPortion
      );
      return {
        ...state,
        consumptionList: [...consumptionList],
        totalCalories: getTotalCalories(consumptionList),
        saved: false,
      };
    }
    case UPDATE_CONSUMPTION_CALORIES: {
      let consumptionList = state.consumptionList;
      const index = consumptionList.findIndex(
        (consumption) => consumption.id == payload.id
      );

      consumptionList[index].calories = payload.calories;

      consumptionList[index].quantity = Number(
        payload.calories / consumptionList[index].caloriesPerPortion
      ).toFixed(2);
      return {
        ...state,
        consumptionList: [...consumptionList],
        totalCalories: getTotalCalories(consumptionList),
        saved: false,
      };
    }
    case DELETE_CONSUMPTION: {
      const deletedConsumption = state.consumptionList.find(
        (consumption) => consumption.id === payload.id
      );
      return {
        ...state,
        consumptionList: [
          ...state.consumptionList.filter(
            (consumption) => consumption.id !== payload.id
          ),
        ],
        totalCalories: state.totalCalories - deletedConsumption.calories,
        saved: false,
      };
    }
    case CLEAR_CONSUMPTIONS: {
      return {
        ...state,
        consumptionList: [],
        totalCalories: 0,
        saved: false,
      };
    }
    case SAVE_CONSUMPTION_LIST: {
      return {
        ...state,
        saved: true,
        saving: false,
      };
    }
    case SET_SAVING_LOADING: {
      return {
        ...state,
        saving: true,
      };
    }
    case SET_CONSUMPTIONS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}

const getTotalCalories = (consumptionList) => {
  let totalCalories = 0;
  consumptionList.forEach((consumption) => {
    totalCalories += Number(consumption.calories);
    return;
  });
  return totalCalories;
};
