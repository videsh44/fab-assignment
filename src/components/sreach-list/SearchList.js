import React from 'react';
import { useSelector } from 'react-redux';

import List from './List';

const SearchList = () => {
  const hotelsList = useSelector((state) => state.hotels.hotelsList);

  const renderHotelsList = () => {
    return (
      hotelsList &&
      hotelsList.length !== 0 &&
      hotelsList.map((hotel) => {
        const { hotelID, title, address } = hotel;
        return (
          <List
            key={hotelID}
            hotelID={hotelID}
            title={title}
            address={address}
          />
        );
      })
    );
  };

  return (
    <ul className="myUL">
      <li>
        <a className="head_list" href="#!">
          Hotels
        </a>
      </li>
      {renderHotelsList()}
    </ul>
  );
};

export default SearchList;
