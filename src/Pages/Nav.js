import React from 'react';
import { Link } from 'react-router-dom';
  export default function Nav() {

  
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Ecomweb...Milind</a>
 
      <Link className="nav-link active" aria-current="page" to="/">Products</Link>
     
      
      <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
      
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
     
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
  }
