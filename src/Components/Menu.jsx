import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
   <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container justify-content-between">
            <NavLink to ={`/`} className="navbar-brand">React-CRUD-local-Storage</NavLink>

            <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target='#menu'>
                <span className="bi bi-three-dots-vertical"></span>
            </button>
        </div>
        </nav>
              {/* offcanvas */}
            <div className='offcanvas offcanvas-end' tabIndex={'-1'} id='menu'>
               <div className="offcanvas-header">
                  <h5 className="offcanvas-title">React-CRUD-App</h5>
                  <button className='btn-close' data-bs-dismiss="offcanvas"></button>
               </div>
               <div className="offcanvas-body d-flex justify-content-center">
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item'>
                        <NavLink to={`/`} className="nav-link mt-3">
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/about`} className="nav-link mt-3">
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/contact`} className="nav-link mt-3">
                            Contact
                        </NavLink>
                    </li>
                </ul>
               </div>
            </div>
      
   
   </header>
  )
}

export default Menu