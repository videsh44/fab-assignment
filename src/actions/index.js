import { GET_HOTELS, SET_SERACH_TEXT } from './types';

export const getHotelsData = (data) => {
  return {
    type: GET_HOTELS,
    payload: data,
  };
};
export const setSearchText = (data) => {
  return {
    type: SET_SERACH_TEXT,
    payload: data,
  };
};
