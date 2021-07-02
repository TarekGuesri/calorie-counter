import {
  GET_CONSUMPTION_LIST,
  UPDATE_CONSUMPTION_QUANTITY,
  UPDATE_CONSUMPTION_CALORIES,
  DELETE_CONSUMPTION,
} from '../actions/types';

const initialState = {
  consumptionList: [],
  loading: true,
  saved: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONSUMPTION_LIST:
      return {
        ...state,
        consumptionList: payload,
        loading: false,
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
      };
    }
    case DELETE_CONSUMPTION: {
      return {
        ...state,
        consumptionList: [
          ...state.consumptionList.filter(
            (consumption) => consumption.id !== payload.id
          ),
        ],
      };
    }
    default:
      return state;
  }
}
