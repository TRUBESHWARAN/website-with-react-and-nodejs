import React from 'react';
import {Link} from 'react-router-dom'; // Assuming you use React Rout
import '../styles/navbar.css'; // Import CSS for styling

const Navbar = ({ handleLogout }) => {
    return (

        <nav className="navbar">

            <div className="navbar-container">

                <div className="navbar-brand">

                    <Link to="/" className="navbar-logo">

                        Chat App

                    </Link>

                </div>

                <ul className="navbar-nav">

                    <li className="nav-item">

                        <Link to="/register" className="nav-link">

                            Register

                        </Link>

                    </li>

                    <li className="nav-item">

                        <Link to="/" className="nav-link">

                            Login
                        </Link>

                    </li>

                    <li className="nav-itemosloven">

                        <button className="nav-link" onClick={handleLogout}>

                            Logout

                        </button>

                    </li>

                </ul>

            </div>

        </nav>
    );
};
export default Navbar;