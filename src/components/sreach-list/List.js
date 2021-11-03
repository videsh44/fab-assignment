import React from 'react';
import { FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const List = ({ hotelID, title, address }) => {
  return (
    <li key={hotelID}>
      <Link to={`/${hotelID}`}>
        <span>
          <FaHotel />
        </span>
        {'  '}
        <span className="hotel_name">{title}</span>
        {'  '}
        <span className="hotel_address">{address}</span>
      </Link>
    </li>
  );
};

export default List;
