import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsData, setSearchText } from '../../actions';
import '../../css/search-input.css';
import { hotelsData } from '../../data/hotelsData';
import SearchList from '../sreach-list/SearchList';

const SearchInput = () => {
  const dispatch = useDispatch();
  const hotelsList = useSelector((state) => state.hotels.hotelsList);
  const searchText = useSelector((state) => state.hotels.searchText);

  const onInputChange = ({ target: { value } }) => {
    if (value) {
      const list = hotelsData.filter(
        (item) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.address.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(setSearchText(value));
      dispatch(getHotelsData(list));
    } else {
      dispatch(setSearchText(''));
      dispatch(getHotelsData([]));
    }
  };

  return (
    <>
      <div className="search">
        <input
          value={searchText}
          type="text"
          onChange={onInputChange}
          className="myInput"
          placeholder="Search for Hotels or places.."
        />
      </div>
      {hotelsList && hotelsList.length !== 0 && <SearchList />}
    </>
  );
};

export default SearchInput;
