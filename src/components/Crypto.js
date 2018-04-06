import React from 'react';
import { Link } from 'react-router-dom';

import { isIncreased } from '../utilities/helpers';

const Crypto = (props) => {
  const {
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = props.crypto;

  return(
    <div className="crypto">
      <h5>
        <Link className="crypto__name" to={`/details/${props.crypto.id}`}>
          {name} ({symbol})
        </Link>
        <span className="crypto__price small"> ${price_usd}</span>
      </h5>
      <ul className="crypto__meta">
        <li className="crypto__price--1h">
          1h: <span className={isIncreased(percent_change_1h) ? 'increase' : 'decrease'}>
                {percent_change_1h}
              </span>
        </li>,
        <li className="crypto__price--24h">
          24h: <span className={isIncreased(percent_change_24h) ? 'increase' : 'decrease'}>
                {percent_change_24h}
              </span>
        </li>,
        <li className="crypto__price--7d">
          7d: <span className={isIncreased(percent_change_7d) ? 'increase' : 'decrease'}>
                {percent_change_7d}
              </span>
        </li>
      </ul>
    </div>
  );
}

export default Crypto;
