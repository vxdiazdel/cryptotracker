import React from 'react';

import Crypto from './Crypto';

const CryptoList = (props) => (
  <div className="crypto-list">
    {
      props.cryptos.map((crypto, key) => {
        return <Crypto key={key} crypto={crypto} />
      })
    }
  </div>
);

export default CryptoList;
