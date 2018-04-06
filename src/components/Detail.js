import React from 'react';

const Detail = ({crypto}) => {
  return(
    <div className="detail">
      <pre>{JSON.stringify(crypto, null, 2)}</pre>
    </div>
  );
}

export default Detail;
