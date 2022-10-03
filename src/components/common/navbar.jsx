import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fs-5">
            <div className="container-fluid">
                <Link className="navbar-brand fs-4 text-light" to="/">
                    Movies
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link text-light"
                            aria-current="page" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-link text-light" to="/rentals">
                            Rentals
                        </NavLink>
                        <NavLink className="nav-link text-light" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="nav-link text-light" to="/register">
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;