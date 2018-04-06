import React from 'react';

import CryptoList from '../components/CryptoList';
import Loader from '../components/Loader';

const Home = (props) => {
  return (
    <div className="page page__home">
      {
        props.cryptos.length ?
        <CryptoList {...props}/> :
        <Loader />
      }
    </div>
  );
}

export default Home;
