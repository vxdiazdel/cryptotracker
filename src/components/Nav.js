import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  function renderLinks() {
    return props.cryptos.map((crypto, key) => {
  		return(
          <li className="nav-item" key={key}>
            <NavLink
              className="nav-link"
              to={`/details/${crypto.id}`}>{crypto.name}
            </NavLink>
          </li>
        )
    })
  }

  return (
    <nav className="navbar navbar-inverse navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink className="navbar-brand" to="/">CryptoTracker</NavLink>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
		      {props.cryptos && renderLinks()}
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
