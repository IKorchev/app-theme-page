import React from "react"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='container-fluid nav-container'>
      <div className='container-fluid d-flex justify-content-between'>
        <NavLink
          className='navbar-logo navbar-brand'
          data-bs-dismiss='offcanvas'
          to='/'
          activeClassName='active'>
          Creative.
        </NavLink>
        <a
          className='text-black'
          data-bs-toggle='offcanvas'
          href='#offcanvas'
          role='button'
          aria-controls='offcanvas'>
          <i className='bi bi-list'></i>
        </a>
      </div>
      <div
        className='offcanvas offcanvas-end w-100 h-100'
        tabindex='-1'
        id='offcanvas'
        aria-labelledby='offcanvasLabel'>
        <div className='offcanvas-header'>
          <button
            type='button'
            className='btn-close text-reset ms-auto p-4'
            data-bs-dismiss='offcanvas'
            aria-label='Close'></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='navbar-nav'>
            <li className='nav-item mx-auto'>
              <NavLink
                className='nav-link'
                data-bs-dismiss='offcanvas'
                to='/'
                activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li className='nav-item mx-auto'>
              <NavLink
                className='nav-link'
                data-bs-dismiss='offcanvas'
                to='/about'
                activeClassName='active'>
                About
              </NavLink>
            </li>
            <li className='nav-item mx-auto'>
              <NavLink
                className='nav-link'
                data-bs-dismiss='offcanvas'
                to='/contact'
                activeClassName='active'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
