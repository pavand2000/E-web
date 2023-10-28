import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {GiShoppingCart} from 'react-icons/gi';



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" >
    <GiShoppingCart/> Ecommerce
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink to='/'  className="nav-link"  >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/categary' className="nav-link" >
            category
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/register' className="nav-link" href="#">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link" href="#">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link" href="#">
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header