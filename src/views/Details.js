import React from 'react';

import Detail from '../components/Detail';

const Details = ({crypto}) => (
  <div className="page page__details">
    <h2 className="page__title">{crypto && crypto.name}</h2>
    <Detail crypto={crypto} />
  </div>
);

export default Details;
