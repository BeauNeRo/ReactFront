import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoimage from './main_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
const Nav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/home">
                <img src={logoimage} className="logo-image"/></a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink 
                                className="nav-link" 
                                to="/home"
                                activeClassName="active">
                                
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/company"
                                activeClassName="active">
                                COMPANY
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/shopping"
                                activeClassName="active">
                                SHOPPING
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/fitting"
                                activeClassName="active">
                                FITTING
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/loginform" 
                                tableindex="-1" 
                                aria-aria-disabled="true"
                                activeClassName="active">
                                MYPAGE
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;