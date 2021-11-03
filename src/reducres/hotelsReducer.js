import { GET_HOTELS, SET_SERACH_TEXT } from '../actions/types';

const initialState = {
  hotelsList: [],
  searchText: '',
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS:
      return {
        ...state,
        hotelsList: action.payload,
      };
    case SET_SERACH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default hotelReducer;
