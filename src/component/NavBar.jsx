import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container">
    <a className="navbar-brand logo" href="#">E-Commerce </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
        <li className="nav-item mb-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mens</a></li>
            <li><a className="dropdown-item" href="#">Children</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Woman</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex " role="search">
        <button className="btn btn-outline-success" type="submit">Login</button>

      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
