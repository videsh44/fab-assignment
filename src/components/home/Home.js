import React from 'react';
import Header from '../layout/Header';
import SearchInput from '../search-input/SearchInput';

const Home = ({ history }) => {
  return (
    <>
      <Header history={history} />
      <SearchInput />
    </>
  );
};

export default Home;
