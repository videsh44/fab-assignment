import React from 'react';

const Header = ({ history }) => {
  return (
    <div onClick={() => history.push('/')} className="layout_header">
      FabHotels
    </div>
  );
};

export default Header;
